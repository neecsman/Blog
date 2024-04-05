import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  number | undefined,
  ThunkConfig<string>
>("articleDetail/fetchCommentsByArticleId", async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  if (!articleId) {
    return rejectWithValue("error");
  }

  try {
    const { data } = await extra.api.get<Comment[]>(`/comments`, {
      params: { articleId },
    });

    if (!data) {
      throw new Error();
    }

    return data;
  } catch (error) {
    return rejectWithValue("Error");
  }
});
