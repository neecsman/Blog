import { classNames } from "helpers";
import style from "./Text.module.scss";
import { memo } from "react";

export enum TextVariant {
  ERROR = "error",
  BASE = "base",
}

export enum TextSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  "2XL" = "_2xl",
  "3XL" = "_3xl",
  "4XL" = "_4xl",
  "5XL" = "_5xl",
}

export interface TextProps {
  className?: string;
  variant?: TextVariant;
  size?: TextSize;
  children: string;
}

const Text: React.FC<TextProps> = memo(
  ({ className, children, variant = TextVariant.BASE, size = TextSize.MD }) => {
    return (
      <p
        className={classNames(style.Text, {}, [
          className,
          style[variant],
          style[size],
        ])}
      >
        {children}
      </p>
    );
  }
);
export default Text;
