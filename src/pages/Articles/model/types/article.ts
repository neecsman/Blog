import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";

export interface ArticlePageScheme extends EntityState<Article, number> {
  isLoading: boolean;
  error?: string;

  view: ArticleView;
}
