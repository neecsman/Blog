import { MouseEventHandler, useEffect, useRef } from "react";

import style from "./Option.module.scss";

export type OptionType = {
  value: string;
  title: string;
};

export type OptionProps = {
  option: OptionType;
  onClick: (value: OptionType) => void;
};

const Option = (props: OptionProps) => {
  const { option, onClick } = props;

  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (clickedValue: OptionType): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  useEffect(() => {
    const optionEl = optionRef.current;
    if (!optionEl) return;

    const handleEnterPress = (event: KeyboardEvent) => {
      if (document.activeElement === optionEl && event.key === "Enter") {
        onClick(option);
      }
    };

    optionEl.addEventListener("keydown", handleEnterPress);

    return () => {
      optionEl.removeEventListener("keydown", handleEnterPress);
    };
  }, [option, onClick]);

  return (
    <li
      className={style.option}
      value={option.value}
      onClick={handleClick(option)}
      tabIndex={0}
      ref={optionRef}
    >
      {option.title}
    </li>
  );
};

export default Option;
