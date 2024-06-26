import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import { Page, Text } from "shared/ui";
import style from "./ArticleDetails.module.scss";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";
import {
  articleDetailsCommentsReducer,
  getArticleComment,
} from "../../model/slice/articleDetailsCommentSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useEffect } from "react";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { fetchCommentsByArticleId } from "pages/ArticleDetails/model/api/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "features/ArticleDetails/addCommentForm";
import { addCommentForArticle } from "pages/ArticleDetails/model/api/addCommentForArticle/addCommentForArticle";

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetail: React.FC<ArticleDetailsProps> = ({ className }) => {
  const { t } = useTranslation("article-details");
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComment.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  if (!id) {
    return (
      <Page className={classNames(style.articleDetails, {}, [className])}>
        {t("not_found")}
      </Page>
    );
  }

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(+id));
  }, []);

  const onSendComment = (text: string) => {
    dispatch(addCommentForArticle(text));
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(style.articleDetails, {}, [className])}>
        <div className={style.articleDetails_section}>
          <ArticleDetails id={id} />
        </div>
        <div className={style.articleDetails_section}>
          <Text>{t("comments.title")}</Text>
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={isLoading} comments={comments} />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};
export default ArticleDetail;
