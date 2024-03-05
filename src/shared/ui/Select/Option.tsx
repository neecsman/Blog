import { MouseEventHandler, useEffect, useRef } from "react";
import CheckedIcon from "../../assets/icons/check.svg";
import style from "./Option.module.scss";
import { classNames } from "helpers";

export type OptionType = {
  value: string;
  title: string;
};

export type OptionProps = {
  option: OptionType;
  isSelected: boolean;
  onClick: (value: OptionType) => void;
};

const Option = (props: OptionProps) => {
  const { option, onClick, isSelected } = props;

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
      className={classNames(style.option, { [style.selected]: isSelected }, [])}
      value={option.value}
      onClick={handleClick(option)}
      tabIndex={0}
      ref={optionRef}
    >
      {option.title}
      {isSelected && (
        <div className={style.icon}>
          <CheckedIcon fill="gray" />
        </div>
      )}
    </li>
  );
};

export default Option;
