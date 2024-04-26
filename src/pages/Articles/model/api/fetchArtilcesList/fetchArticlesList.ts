import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageLimit } from "../../selectors/articles";
import { ArticleListResponseData } from "../../types/articlePageSchema";

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  ArticleListResponseData,
  FetchArticlesListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const { page = 1 } = props;
  const limit = getArticlesPageLimit(getState());
  try {
    const { data } = await extra.api.get<ArticleListResponseData>(`/articles`, {
      params: { page, limit },
    });

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});
