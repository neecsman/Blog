import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleDetails.module.scss";
import { useParams } from "react-router-dom";

interface ArticleDetailsProps {
  className?: string;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ className }) => {
  const { t } = useTranslation();
  const params = useParams();
  console.log(params);

  return (
    <div className={classNames(style.articleDetails, {}, [className])}>
      ARTICLE DETAILS {params?.id}
    </div>
  );
};
export default ArticleDetails;
