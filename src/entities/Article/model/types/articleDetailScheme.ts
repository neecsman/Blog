import { Article } from "./article";

export interface ArticleDetailScheme {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
