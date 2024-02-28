import { classNames } from "helpers";
import style from "./Text.module.scss";

export enum TextVariant {
  ERROR = "error",
  HEADING = "heading",
  BASE = "base",
}

export interface TextProps {
  className?: string;
  variant?: TextVariant;
  children: string;
}

const Text: React.FC<TextProps> = ({ className, children, variant }) => {
  return (
    <p className={classNames(style.Text, {}, [className, variant])}>
      {children}
    </p>
  );
};
export default Text;
