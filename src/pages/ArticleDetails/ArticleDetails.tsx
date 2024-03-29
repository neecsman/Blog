import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleDetails.module.scss";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";

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
      <CommentList
        comments={[
          {
            id: 1,
            text: "Интересная статья, хотелось бы более подробно услышать про тонкости event loop. Спасибо!",
            created_at: new Date(),
            updated_at: new Date(),
            user: {
              id: 1,
              firstname: "Антон",
              lastname: "Вавилов",
              username: "batman",
              avatar: "",
              email: "",
            },
          },
          {
            id: 2,
            text: "Интересная статья, хотелось бы более подробно услышать про тонкости event loop. Спасибо!",
            created_at: new Date(),
            updated_at: new Date(),
            user: {
              id: 2,
              firstname: "Иван",
              lastname: "Самойлов",
              username: "acuaman",
              avatar: "",
              email: "",
            },
          },
          {
            id: 3,
            text: "Интересная статья, хотелось бы более подробно услышать про тонкости event loop. Спасибо!",
            created_at: new Date(),
            updated_at: new Date(),
            user: {
              id: 3,
              firstname: "Федор",
              lastname: "Достоевский",
              username: "deedpool",
              avatar: "",
              email: "",
            },
          },
        ]}
      />
    </div>
  );
};
export default ArticleDetail;
