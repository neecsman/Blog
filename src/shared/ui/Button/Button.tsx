import { classNames } from "helpers/classNames/classNames";
import React, { ButtonHTMLAttributes } from "react";

import style from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      {...otherProps}
      className={classNames(style.button, {}, [className, style[theme]])}
    >
      {children}
    </button>
  );
};

export default Button;
