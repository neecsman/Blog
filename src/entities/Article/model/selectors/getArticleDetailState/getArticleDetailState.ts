import { StateSchema } from "app/providers/StoreProvider";

export const getArticleStateData = (state: StateSchema) =>
  state.articleDetail?.data;

export const getArticleStateError = (state: StateSchema) =>
  state.articleDetail?.error;

export const getArticleStateIsLoading = (state: StateSchema) =>
  state.articleDetail?.isLoading;
