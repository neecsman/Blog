import { classNames } from "helpers";
import { MutableRefObject, memo, useEffect, useRef, useState } from "react";
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
  isLoading?: boolean;
}

const Page: React.FC<PageProps> = ({
  className,
  children,
  onScrollEnd,
  isLoading,
}) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollSaveByPath(state, pathname)
  );

  useInfinitieScroll({
    callback: onScrollEnd,
    triggerRef,
  });

  useEffect(() => {
    if (!isLoading) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  }, [isLoading]);

  const onScroll = useThrottle(() => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        path: pathname,
        position: window.scrollY,
      })
    );
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={wrapperRef} className={style.pageWrapper}>
      <div className={classNames(style.page, {}, [className])}>{children}</div>
      {onScrollEnd && <div className={style.trigger} ref={triggerRef} />}
    </section>
  );
};

export default memo(Page);
