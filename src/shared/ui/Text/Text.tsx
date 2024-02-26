import { classNames } from "helpers";
import style from "./Text.module.scss";

export enum TextVariant {
  ERROR = "error",
  HEADING = "heading",
  BASE = "base",
}

export interface TextProps {
  className?: string;
  children: string;
}

const Text: React.FC<TextProps> = ({ className, children }) => {
  return <p className={classNames(style.Text, {}, [className])}>{children}</p>;
};
export default Text;
