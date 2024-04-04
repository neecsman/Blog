import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./Textarea.module.scss";
import { ChangeEventHandler, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: React.FC<TextareaProps> = (props) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(style.textarea, {}, [className])}>
      <textarea {...otherProps}></textarea>
    </div>
  );
};
export default Textarea;
