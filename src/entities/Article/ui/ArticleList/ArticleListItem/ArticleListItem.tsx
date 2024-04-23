import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleListItem.module.scss";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlockType,
  ArticleView,
} from "../../../model/types/article";
import { AppLink, Avatar, Image, Text } from "shared/ui";
import { TextSize, TextVariant } from "shared/ui/Text/Text";
import ViewIcon from "shared/assets/icons/view.svg";
import { RouterPath } from "shared/config/routeConfig/routerConfig";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const { className, article, view } = props;
  const { t } = useTranslation();

  if (view === ArticleView.ROW) {
    let textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlockType;

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
              <AppLink to={RouterPath.profile + "/" + article.author.id}>
                <Avatar size={40} src={article.author.avatar} />
              </AppLink>
              <AppLink to={RouterPath.profile + "/" + article.author.id}>
                <Text>{article.author.username}</Text>
              </AppLink>
            </div>
          </div>

          <AppLink to={RouterPath.article_details + article.id}>
            <div className={style.card_body}>
              <Text variant={TextVariant.TITLE}>{article.title}</Text>
              <Text variant={TextVariant.SUBTITLE}>{article.subtitle}</Text>
              <div className={style.image_wrapper}>
                <Image src={article.img} />
              </div>
              {textBlock && (
                <Text trim={150}>{textBlock.paragraphs[0].text}</Text>
              )}
            </div>
          </AppLink>
          <div className={style.card_footer}>
            <div className={style.tags_wrapper}>
              {article.tags.map(({ id, type }) => (
                <div key={id} className={style.tags}>
                  <Text size={TextSize.XS}>{type}</Text>
                </div>
              ))}
            </div>
            <div className={style.card_footer_statistics}>
              <div className={style.views}>
                <ViewIcon width={20} /> {article.views}
              </div>

              <div className={style.date}>
                {new Date(article.created_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AppLink to={`${article.id}`}>
      <div
        className={classNames(style.articleListItem, {}, [
          className,
          style[view],
        ])}
      >
        <div className={style.tags_wrapper}>
          {article.tags.map(({ id, type }) => (
            <div key={id} className={style.tags}>
              <Text size={TextSize.XS}>{type}</Text>
            </div>
          ))}
        </div>
        <div className={style.card}>
          <div className={style.card_body}>
            <div className={style.image_wrapper}>
              <Image src={article.img} alt="Article image" />
            </div>
            <div className={style.info_wrapper}>
              <Text variant={TextVariant.TITLE}>{article.title}</Text>
              <Text size={TextSize.SM} variant={TextVariant.SUBTITLE}>
                {article.subtitle}
              </Text>
            </div>
          </div>
          <div className={style.card_footer}>
            <div className={style.views}>
              <ViewIcon width={20} /> {article.views}
            </div>
            <div className={style.date}>
              {new Date(article.created_at).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </AppLink>
  );
};
export default ArticleListItem;
