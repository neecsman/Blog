import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./Textarea.module.scss";
import {
  ChangeEventHandler,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: React.FC<TextareaProps> = (props) => {
  const { className, value, ...otherProps } = props;
  const { t } = useTranslation();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "100px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  return (
    <div className={classNames(style.textarea, {}, [className])}>
      <textarea ref={textareaRef} value={value} {...otherProps} />
    </div>
  );
};
export default Textarea;
