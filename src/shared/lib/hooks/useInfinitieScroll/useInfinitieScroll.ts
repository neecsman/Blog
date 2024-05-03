import { MutableRefObject, useEffect } from "react";

export interface useInfinitieScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
}

export const useInfinitieScroll = ({
  callback,
  triggerRef,
}: useInfinitieScrollProps) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    if (callback) {
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
  }, [triggerRef]);
};
