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

  const isLoading = true;

  if (isLoading) {
    return (
      <div className={classNames(style.articleDetails, {}, [className])}>
        <div className={style.skeleton}>
          <Skeleton width={50} height={50} border="100%" />
          <Skeleton width={100} height={25} border="10px" />
          <Skeleton width={"100%"} height={300} border="10px" />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
        </div>
      </div>
    );
  }

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
