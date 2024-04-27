import { classNames } from "helpers";
import { MutableRefObject, memo, useEffect, useRef } from "react";
import { useInfinitieScroll } from "shared/lib/hooks/useInfinitieScroll/useInfinitieScroll";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { getScrollSaveByPath, scrollSaveActions } from "features/ScrollSave";
import { StateSchema } from "app/providers/StoreProvider";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useThrottle } from "shared/lib/hooks/useTrottle/useTrottle";

import style from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: React.ReactNode;
  onScrollEnd?: () => void;
}

const Page: React.FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollSaveByPath(state, pathname)
  );

  const dispatch = useAppDispatch();

  useInfinitieScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef,
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, []);

  const onScroll = useThrottle((e: React.UIEvent<HTMLElement, UIEvent>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  return (
    <section ref={wrapperRef} className={style.pageWrapper} onScroll={onScroll}>
      <div className={classNames(style.page, {}, [className])}>{children}</div>
      {onScrollEnd && <div ref={triggerRef} />}
    </section>
  );
};

export default memo(Page);
