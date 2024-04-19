import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleListItem.module.scss";
import { Article, ArticleView } from "../../../model/types/article";
import { Image, Text } from "shared/ui";
import { TextSize, TextVariant } from "shared/ui/Text/Text";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const { className, article, view } = props;
  const { t } = useTranslation();

  if (view === ArticleView.ROW) {
    return (
      <div
        className={classNames(style.articleListItem, {}, [
          className,
          style[view],
        ])}
      >
        {article.title}
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
          <div className={style.imageWrapper}>
            <Image src={article.img} alt="Article image" />
          </div>
          <div className={style.infoWrapper}>
            <Text variant={TextVariant.TITLE}>{article.title}</Text>
            <Text size={TextSize.SM} variant={TextVariant.SUBTITLE}>
              {article.subtitle}
            </Text>
          </div>
        </div>
        <div className={style.card_footer}></div>
      </div>
    </div>
  );
};
export default ArticleListItem;
