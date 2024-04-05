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
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/getArticleDetailState/getArticleDetailState";
import { Avatar, Image, Skeleton, Text } from "shared/ui";
import { TextSize, TextVariant } from "shared/ui/Text/Text";
import {
  ArticleBlock,
  ArticleBlockType,
} from "entities/Article/model/types/article";
import ArticleTextBlock from "../ArticleTextBlock/ArticleTextBlock";
import ArticleCodeBlock from "../ArticleCodeBlock/ArticleCodeBlock";
import ArticleImageBlock from "../ArticleImageBlock/ArticleImageBlock";

import ViewIcon from "shared/assets/icons/view.svg";

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

    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    const renderBlock = (block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.TEXT:
          return <ArticleTextBlock block={block} />;

        case ArticleBlockType.CODE:
          return <ArticleCodeBlock block={block} />;

        case ArticleBlockType.IMAGE:
          return <ArticleImageBlock block={block} />;

        default:
          return null;
      }
    };

    useEffect(() => {
      id && dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
      content = (
        <div className={style.skeleton}>
          <Skeleton width={50} height={50} border="100%" />
          <Skeleton width={100} height={25} border="10px" />
          <Skeleton width={"100%"} height={300} border="10px" />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
          <Skeleton width={"100%"} height={25} border={"10px"} />
        </div>
      );
    } else if (error) {
      <>Error</>;
    } else {
      content = (
        <>
          <div className={style.articleDetails_header}>
            <Avatar
              src="https://sun1-16.userapi.com/s/v1/if2/lUnM5x31bydvfjteOGZWK15pU2KhU3BIlPM93MH4XbGKjtvdMeXwRn93WxaIoBz8pPdtkYieUVyLM5dAYdZs3a-7.jpg?quality=96&crop=129,226,1240,1240&as=50x50,100x100,200x200,400x400&ava=1&u=T2ZDInShMZ9T5gLerAsYhDjywENQ1QTsxLHWWbrRdv0&cs=200x200"
              alt="avatar"
              size={50}
            />

            <div>
              <Text variant={TextVariant.TITLE}>Никита Колесников</Text>
              <Text size={TextSize.SM} variant={TextVariant.SUBTITLE}>
                {article?.created_at &&
                  new Date(article?.created_at).toLocaleString()}
              </Text>
            </div>
          </div>
          <div className={style.articleDetails_body}>
            <div className={style.articleDetails_body_title}>
              <Text size={TextSize["XL"]} variant={TextVariant.TITLE}>
                {article?.title}
              </Text>
              <Text size={TextSize.LG} variant={TextVariant.BASE}>
                {article?.subtitle}
              </Text>
            </div>

            <div className={style.articleDetails_body_image}>
              <Image src={article?.img} />
            </div>
            <div className={style.articleDetails_body_blocks}>
              {article?.blocks.map((block) => (
                <div key={block.id}>{renderBlock(block)}</div>
              ))}
            </div>
          </div>

          <div className={style.articleDetails_footer}>
            <div className={style.articleDetails_tags}></div>
            <div className={style.articleDetails_info}>
              <div className={style.articleDetails_info_view}>
                <ViewIcon /> {article?.views}
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
        <div className={classNames(style.articleDetails, {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  }
);
export default ArticleDetails;
