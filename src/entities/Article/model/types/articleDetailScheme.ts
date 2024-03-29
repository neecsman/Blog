import { Article } from "./Article";

export interface ArticleDetailScheme {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
