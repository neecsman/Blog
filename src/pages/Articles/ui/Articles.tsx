import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./Articles.module.scss";
import { ArticleList, ArticleView } from "entities/Article";
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

import {
  getArticlesPageError,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articles";
import { Page } from "shared/ui";
import { ArticleViewSwitcher } from "features/Article";
import { fetchNextArticlesList } from "../model/api/fetchNextArticleList/fetchNextArticleList";
import { initArticlesPage } from "../model/api/initArticlesPage/initArticlesPage";
import { Sidebar } from "widgets/Sidebar";

interface ArticlesProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: artilcesPageReducer,
};

const Articles: React.FC<ArticlesProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageAction.setView(view));
  };

  const onLoadNextData = () => {
    dispatch(fetchNextArticlesList());
  };

  useEffect(() => {
    dispatch(initArticlesPage());
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextData}
        className={classNames(style.articles, {}, [className])}
      >
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
        {/* <ArticleViewSwitcher view={view} onViewClick={onChangeView} /> */}
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(Articles);
