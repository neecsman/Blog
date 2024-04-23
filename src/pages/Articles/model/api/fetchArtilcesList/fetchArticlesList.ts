import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const { data } = await extra.api.get<Article[]>(`/articles`);

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});
