import { classNames } from "helpers";
import style from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";
import { Page } from "shared/ui";

interface NotFoundProps {
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ className }) => {
  const { t } = useTranslation("notFoundPage");
  return (
    <Page className={classNames(style.notFoundPage, {}, [className])}>
      {t("Page not found")}
    </Page>
  );
};

export default NotFound;
