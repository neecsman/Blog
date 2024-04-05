import { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsData = (state: StateSchema) =>
  state.articleDetail?.data;

export const getArticleDetailsError = (state: StateSchema) =>
  state.articleDetail?.error;

export const getArticleDetailsIsLoading = (state: StateSchema) =>
  state.articleDetail?.isLoading;
