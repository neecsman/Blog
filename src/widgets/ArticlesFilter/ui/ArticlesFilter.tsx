import { classNames } from "helpers";
import style from "./ArticlesFilter.module.scss";
import { ArticleViewSwitcher } from "features/Article";
import { ArticleView } from "entities/Article";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { articlesPageAction } from "pages/Articles/model/slice/articleSlice";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "pages/Articles/model/selectors/articles";
import { Select } from "shared/ui";

interface ArticlesFilterProps {
  className?: string;
}

const ArticlesFilter: React.FC<ArticlesFilterProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);

  const onChangeView = (view: ArticleView) => {
    dispatch(articlesPageAction.setView(view));
  };
  return (
    <div className={classNames(style.articlesFilter, {}, [className])}>
      <Select className={style.sort} placeholder={"Сортировка"} />
      <ArticleViewSwitcher view={view} onViewClick={onChangeView} />
    </div>
  );
};
export default ArticlesFilter;
