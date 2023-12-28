import { classNames } from "helpers";
import style from "./Input.module.scss";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...otherProps }) => {
  return (
    <div className={classNames(style.Input, {}, [className])}>
      <input {...otherProps} />
    </div>
  );
};
export default Input;
