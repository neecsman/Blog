import { Comment, CommentCard } from "../../";
import { classNames } from "helpers";
import style from "./CommentList.module.scss";
import { Text } from "shared/ui";
import { useTranslation } from "react-i18next";

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation("article-details");
  return (
    <div className={classNames(style.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))
      ) : (
        <Text>{t("comments.empty")}</Text>
      )}
    </div>
  );
};
export default CommentList;
