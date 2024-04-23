import { useState } from "react";

interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
type UseHoverResult = [boolean, UseHoverBind];

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return [isHover, { onMouseEnter, onMouseLeave }];
};
