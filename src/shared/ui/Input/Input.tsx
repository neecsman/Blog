import { classNames } from "helpers";
import style from "./Input.module.scss";
import { InputHTMLAttributes, memo, useEffect, useRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = memo(
  ({ className, autoFocus, ...otherProps }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    return (
      <div className={classNames(style.Input, {}, [className])}>
        <input ref={inputRef} {...otherProps} />
      </div>
    );
  }
);
export default Input;
