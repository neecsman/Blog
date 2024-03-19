import { useTranslation } from "react-i18next";
import { classNames } from "helpers";
import style from "./ArticleDetails.module.scss";
import DynamicModuleLoader, {
  ReducersList,
} from "shared/lib/components/DynamicModuleLoadert";
import { artilceDetailReducer } from "../../model/slice/articleDetailSlice";
import { memo, useEffect } from "react";
import { useAppDispatch } from "app/providers/StoreProvider/config/store";
import { fetchArticleById } from "entities/Article/model/api/fetchArticleById/fetchArticleById";
import { useParams } from "react-router-dom";
import Skeleton from "shared/ui/Skeleton/Skeleton";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetail: artilceDetailReducer,
};

const ArticleDetails: React.FC<ArticleDetailsProps> = memo(
  ({ className, id }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
      id && dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
        <div
          className={classNames(style.ArticleDetails, {}, [className])}
        ></div>
      </DynamicModuleLoader>
    );
  }
);
export default ArticleDetails;
