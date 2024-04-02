import { Comment, CommentCard } from "../../";
import { classNames } from "helpers";
import style from "./CommentList.module.scss";
import { Skeleton, Text } from "shared/ui";
import { useTranslation } from "react-i18next";

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation("article-details");

  if (isLoading) {
    return (
      <div className={classNames(style.commentList, {}, [className])}>
        <div className={style.skeleton}>
          <div className={style.skeleton_header}>
            <Skeleton width={40} height={40} border="100%" />
            <Skeleton width={100} height={15} border="15px" />
          </div>
          <div className={style.skeleton_text}>
            <Skeleton width={"100%"} height={15} border="15px" />
            <Skeleton width={"100%"} height={15} border="15px" />
          </div>
        </div>
        <div className={style.skeleton}>
          <div className={style.skeleton_header}>
            <Skeleton width={40} height={40} border="100%" />
            <Skeleton width={100} height={15} border="15px" />
          </div>
          <div className={style.skeleton_text}>
            <Skeleton width={"100%"} height={15} border="15px" />
            <Skeleton width={"100%"} height={15} border="15px" />
          </div>
        </div>
        <div className={style.skeleton}>
          <div className={style.skeleton_header}>
            <Skeleton width={40} height={40} border="100%" />
            <Skeleton width={100} height={15} border="15px" />
          </div>
          <div className={style.skeleton_text}>
            <Skeleton width={"100%"} height={15} border="15px" />
            <Skeleton width={"100%"} height={15} border="15px" />
          </div>
        </div>
      </div>
    );
  }

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
