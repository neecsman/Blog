import { createAsyncThunk } from "@reduxjs/toolkit";

import { Profile } from "entities/Profile";
import {
  StateSchema,
  ThunkConfig,
} from "app/providers/StoreProvider/config/StateSchema";
import { Comment } from "entities/Comment";
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData";

import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";
import { getArticleDetailsData } from "entities/Article/model/selectors/getArticleDetailState/getArticleDetailState";

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkAPI) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

  const article = getArticleDetailsData(getState());
  const user = getUserAuthData(getState());

  console.log(article, user, text);

  if (!user || !text || !article) return rejectWithValue("error");

  try {
    const { data } = await extra.api.post<Comment>("comments", {
      articleId: article.id,
      userId: user.id,
      text,
    });

    if (!data) {
      throw new Error();
    }

    dispatch(fetchCommentsByArticleId(article.id));

    return data;
  } catch (e) {
    return rejectWithValue("Error");
  }
});
