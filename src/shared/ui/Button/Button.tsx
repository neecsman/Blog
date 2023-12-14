import { classNames } from "helpers";
import React, { ButtonHTMLAttributes } from "react";

import style from "./Button.module.scss";

export enum ButtonVariant {
  SOLID = "solid",
  CLEAR = "clear",
  OUTLINE = "outline",
  GHOST = "ghost",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  square?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = ButtonVariant.SOLID,
    size = ButtonSize.M,
    square,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(style.button, { [style.square]: square }, [
        className,
        style[variant],
        style[size],
      ])}
    >
      {children}
    </button>
  );
};

export default Button;
