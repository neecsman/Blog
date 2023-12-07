import { classNames } from "helpers";
import React, { ButtonHTMLAttributes } from "react";

import style from "./Button.module.scss";
import { Theme } from "app/providers/ThemeProvider";

export enum VariantButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: VariantButton;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant,

    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={classNames(style.button, {}, [className, style[variant]])}
    >
      {children}
    </button>
  );
};

export default Button;
