import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from "../../selectors/articles";

import { articlesPageAction } from "../../slice/articleSlice";
import { fetchArticlesList } from "../fetchArtilcesList/fetchArticlesList";

export const fetchNextArticlesList = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesList", async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;

  const hasMore = getArticlesPageHasMore(getState());
  const pageNum = getArticlesPageNum(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  console.log(hasMore);

  if (hasMore && !isLoading) {
    dispatch(articlesPageAction.setPage(pageNum + 1));
    dispatch(fetchArticlesList({ page: pageNum + 1 }));
  }
});
