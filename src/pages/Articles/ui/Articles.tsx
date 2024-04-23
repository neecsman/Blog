import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./Articles.module.scss";
import { Article, ArticleList, ArticleView } from "entities/Article";
import { useSelector } from "react-redux";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";
import {
  articlesPageAction,
  artilcesPageReducer,
  getArticles,
} from "../model/slice/articleSlice";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { memo, useEffect } from "react";
import { fetchArticlesList } from "../model/api/fetchArtilcesList/fetchArticlesList";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articles";
import { Text } from "shared/ui";
import { ArticleViewSwitcher } from "features/Article";

interface ArticlesProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: artilcesPageReducer,
};

const Articles: React.FC<ArticlesProps> = ({ className }) => {
  const { t } = useTranslation();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageAction.setView(view));
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageAction.initState());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(style.articles, {}, [className])}>
        <ArticleViewSwitcher view={view} onViewClick={onChangeView} />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
};
export default memo(Articles);
