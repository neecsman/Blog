import { classNames } from "helpers";
import style from "./Page.module.scss";
import { MutableRefObject, useRef } from "react";
import { useInfinitieScroll } from "shared/lib/hooks/useInfinitieScroll/useInfinitieScroll";

interface PageProps {
  className?: string;
  children: React.ReactNode;
  onScrollEnd?: () => void;
}

const Page: React.FC<PageProps> = ({ className, children, onScrollEnd }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinitieScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef,
  });

  return (
    <section ref={wrapperRef} className={style.pageWrapper}>
      <div className={classNames(style.page, {}, [className])}>{children}</div>
      <div ref={triggerRef} />
    </section>
  );
};
export default Page;
