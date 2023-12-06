import { classNames } from "helpers";
import style from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
interface PageErrorProps {
  className?: string;
}

const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation("pageError");

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(style.pageError, {}, [className])}>
      {t("Page error")}
      <Button onClick={reloadPage}>{t("Reload page")}</Button>
    </div>
  );
};

export default PageError;
