import { classNames } from "helpers";
import style from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";

interface NotFoundProps {
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ className }) => {
  const { t } = useTranslation("notFoundPage");
  return (
    <div className={classNames(style.notFoundPage, {}, [className])}>
      {t("Page not found")}
    </div>
  );
};

export default NotFound;
