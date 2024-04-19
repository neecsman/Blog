import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleList.module.scss";
import { Article, ArticleView } from "../../model/types/article";
import ArticleListItem from "./ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { className, articles, view = ArticleView.GRID, isLoading } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} />;
  };

  return (
    <div className={classNames(style.articleList, {}, [className])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
export default ArticleList;
