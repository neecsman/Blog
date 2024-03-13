import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  className?: string;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(style.articleDetails, {}, [className])}>
      ARTICLE DETAILS
    </div>
  );
};
export default ArticleDetails;
