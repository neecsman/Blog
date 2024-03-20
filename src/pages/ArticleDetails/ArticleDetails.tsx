import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleDetails.module.scss";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "entities/Article";
import { Skeleton } from "shared/ui";

interface ArticleDetailsProps {
  className?: string;
}

const ArticleDetail: React.FC<ArticleDetailsProps> = ({ className }) => {
  const { t } = useTranslation("article-details");
  const { id } = useParams();

  if (!id) {
    return (
      <div className={classNames(style.articleDetails, {}, [className])}>
        {t("not_found")}
      </div>
    );
  }

  return (
    <div className={classNames(style.articleDetails, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};
export default ArticleDetail;
