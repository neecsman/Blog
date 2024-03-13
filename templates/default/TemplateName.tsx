import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./TemplateName.module.scss";

interface TemplateNameProps {
  className?: string;
}

const TemplateName: React.FC<TemplateNameProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.templateName, {}, [className])}></div>
  );
};
export default TemplateName;
