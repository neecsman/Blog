import { classNames } from "helpers";
import React, { ButtonHTMLAttributes } from "react";

import style from "./Button.module.scss";

export enum ButtonVariant {
  SOLID = "solid",
  OUTLINE = "outline",
  GHOST = "ghost",
}

export enum ColorScheme {
  GRAY = "gray",
  RED = "red",
  YELLOW = "yellow",
  ORANGE = "orange",
  GREEN = "green",
  BLUE = "blue",
  TEAL = "teal",
  PURPLE = "purple",
  PINK = "pink",
}

export enum ButtonSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  colorScheme?: ColorScheme;
  size?: ButtonSize;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = ButtonVariant.SOLID,
    colorScheme = ColorScheme.GRAY,
    size = ButtonSize.M,
    icon,

    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(
        style.button,
        { [style.icon]: icon ? true : false },
        [className, style[variant], style[size], style[colorScheme]]
      )}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
