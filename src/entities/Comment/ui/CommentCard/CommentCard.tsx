import { Comment } from "../../";
import { classNames } from "helpers";

import style from "./CommentCard.module.scss";
import { Avatar, Text } from "shared/ui";
import { TextSize } from "shared/ui/Text/Text";
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
          <Link to={`/profile/${user.id}`}>
            <Avatar size={40} src={user.avatar} />
          </Link>
          <Link to={`/profile/${user.id}`}>
            <Text
              size={TextSize.SM}
            >{`${user.firstname} ${user.firstname}`}</Text>
          </Link>
        </div>
      </div>
      <div className={style.commentCard_body}>
        <Text>{text}</Text>
      </div>
    </div>
  );
};
export default CommentCard;
