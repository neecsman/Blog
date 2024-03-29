import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ArticleDetailScheme } from "../types/articleDetailScheme";
import { fetchArticleById } from "../api/fetchArticleById/fetchArticleById";
import { Article } from "../types/article";

const initialState: ArticleDetailScheme = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const artilceDetailSlice = createSlice({
  name: "articleDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: artilceDetailActions } = artilceDetailSlice;
export const { reducer: artilceDetailReducer } = artilceDetailSlice;
