import {
  MouseEventHandler,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { classNames } from "helpers";

import ArrowDrop from "../../assets/icons/arrow_drop.svg";

import style from "./Select.module.scss";

import { OptionType } from "./Option";
import Option from "./Option";

type SelectProps = {
  className?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  options?: OptionType[];
  placeholder: string;
  onChange?: (value: string) => void;
  onClose?: () => void;
};

const Select: React.FC<SelectProps> = memo((props) => {
  const {
    className,
    options,
    label,
    value,
    placeholder = "Placeholder",
    defaultValue,
    onChange,
    onClose,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    const { target } = event;
    if (target instanceof Node && !rootRef.current?.contains(target)) {
      isOpen && onClose?.();
      setIsOpen(false);
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsOpen((prev) => !prev);
    }
  };

  const handleSelectClick: MouseEventHandler<HTMLDivElement> = () =>
    setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string) => {
    setIsOpen(false);
    onChange?.(value);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const selectElem = selectRef.current;
    if (!selectElem) return;

    selectElem.addEventListener("keydown", handleKeydown);

    return () => {
      selectElem.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  // const title = options?.filter((item) => item.value === value)[0].title;

  return (
    <div
      ref={rootRef}
      className={classNames(
        style.Select_wrapper,
        { [style.opened]: isOpen, [style.closed]: !isOpen },
        [className]
      )}
    >
      {label && <label>{label}</label>}
      <div
        className={style.select}
        data-selected={!!value}
        onClick={handleSelectClick}
        role="button"
        tabIndex={0}
        ref={selectRef}
      >
        <div className={style.arrow}>
          <ArrowDrop fill={"gray"} />
        </div>
        {defaultValue || placeholder}
      </div>
      {isOpen && (
        <ul className={style.option_list}>
          {options &&
            options.map((option) => (
              <Option
                key={option.value}
                option={option}
                isSelected={value === option.value}
                onClick={handleOptionClick}
              />
            ))}
        </ul>
      )}
    </div>
  );
});

export default Select;
