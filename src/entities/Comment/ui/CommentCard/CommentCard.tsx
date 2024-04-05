import { Comment } from "../../";
import { classNames } from "helpers";

import style from "./CommentCard.module.scss";
import { AppLink, Avatar, Text } from "shared/ui";
import { TextSize, TextVariant } from "shared/ui/Text/Text";
import { Link } from "react-router-dom";

interface CommentCartProps {
  className?: string;
  comment: Comment;
}

const CommentCard: React.FC<CommentCartProps> = ({ className, comment }) => {
  const { text, user, created_at } = comment;
  return (
    <div className={classNames(style.commentCard, {}, [className])}>
      <div className={style.commentCard_header}>
        <div className={style.user}>
          <AppLink to={`/profile/${user.id}`}>
            <Avatar size={40} src={user.avatar} />
          </AppLink>
          <AppLink to={`/profile/${user.id}`}>
            <Text
              size={TextSize.SM}
            >{`${user.firstname} ${user.firstname}`}</Text>
          </AppLink>
        </div>
      </div>
      <div className={style.commentCard_body}>
        <Text size={TextSize.SM}>{text}</Text>
      </div>
    </div>
  );
};
export default CommentCard;
