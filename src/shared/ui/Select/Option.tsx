import { MouseEventHandler, memo, useEffect, useRef } from "react";
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
  onClick: (value: string) => void;
};

const Option = memo((props: OptionProps) => {
  const { option, onClick, isSelected } = props;

  const optionRef = useRef<HTMLLIElement>(null);

  const handleClick =
    (option: OptionType): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(option.value);
    };

  useEffect(() => {
    const optionEl = optionRef.current;
    if (!optionEl) return;

    const handleEnterPress = (event: KeyboardEvent) => {
      if (document.activeElement === optionEl && event.key === "Enter") {
        onClick(option.value);
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
});

export default Option;
