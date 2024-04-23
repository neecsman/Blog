import { classNames } from "helpers";
import style from "./ArticleListItem.module.scss";
import { ArticleView } from "../../../model/types/article";
import { Skeleton } from "shared/ui";

interface ArticleListItemProps {
  className?: string;
  view: ArticleView;
}

const ArticleListItemSkeleton: React.FC<ArticleListItemProps> = (props) => {
  const { className, view } = props;

  if (view === ArticleView.ROW) {
    return (
      <div
        className={classNames(style.articleListItem, {}, [
          className,
          style[view],
        ])}
      >
        <div className={style.card}>
          <div className={style.card_header}>
            <div className={style.card_header_user}>
              <Skeleton border="100%" width={40} height={40} />
              <Skeleton width={100} height={10} border="12px" />
            </div>
          </div>

          <div className={style.card_body}>
            <Skeleton width={"100%"} height={12} border="12px" />
            <Skeleton width={120} height={12} border="12px" />
            <div className={style.image_wrapper}>
              <Skeleton width="100%" height={300} />
            </div>
            <Skeleton width={"100%"} height={12} border="12px" />
            <Skeleton width={"100%"} height={12} border="12px" />
            <Skeleton width={"100%"} height={12} border="12px" />
          </div>

          <div className={style.card_footer}>
            <div className={style.card_footer_statistics}>
              <div className={style.views}>
                <Skeleton width={50} height={10} border="12px" />
              </div>

              <div className={style.date}>
                <Skeleton width={100} height={10} border="12px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={classNames(style.articleListItem, {}, [
        className,
        style[view],
      ])}
    >
      <div className={style.card}>
        <div className={style.card_body}>
          <div className={style.image_wrapper}>
            <Skeleton width={"100%"} height={"100%"} />
          </div>
          <div className={style.info_wrapper}>
            <Skeleton width={"100%"} height={12} border="12px" />
          </div>
        </div>
        <div className={style.card_footer}>
          <div className={style.views}>
            <Skeleton width={30} height={10} border="12px" />
          </div>
          <div className={style.date}>
            <Skeleton width={50} height={10} border="12px" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleListItemSkeleton;
