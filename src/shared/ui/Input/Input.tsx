import { classNames } from "helpers";
import style from "./Input.module.scss";
import { InputHTMLAttributes, memo, useEffect, useRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  autoFocus?: boolean;
  label?: string;
}

const Input: React.FC<InputProps> = memo(
  ({ className, autoFocus, label, ...otherProps }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    return (
      <div className={classNames(style.Input, {}, [className])}>
        {label && <label htmlFor="">{label}</label>}
        <input ref={inputRef} {...otherProps} />
      </div>
    );
  }
);
export default Input;
