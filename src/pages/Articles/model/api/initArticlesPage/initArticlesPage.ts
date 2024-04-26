import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articles";

import { articlesPageAction } from "../../slice/articleSlice";
import { fetchArticlesList } from "../fetchArtilcesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/fetchNextArticlesList", async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;

  const inited = getArticlesPageInited(getState());

  if (!inited) {
    dispatch(articlesPageAction.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
