import { MutableRefObject, useEffect } from "react";

export interface useInfinitieScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfinitieScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: useInfinitieScrollProps) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (callback) {
      let options = {
        root: wrapperRef.current,
        rootMargin: "1px",
        threshold: 1,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerRef.current);
    }

    return () => {
      if (observer) {
        if (triggerRef.current) {
          observer.unobserve(triggerRef.current);
        }
      }
    };
  }, [triggerRef, wrapperRef]);
};
