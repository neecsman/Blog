import { StateSchema } from "app/providers/StoreProvider";
import { StatsFs } from "fs";

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading;

export const getArticleCommentsError = (state: StateSchema) =>
  state.articleDetailsComments?.error;
