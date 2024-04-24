import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";

export interface ArticlePageSchema extends EntityState<Article, number> {
  isLoading: boolean;
  error?: string;

  view: ArticleView;
  //pagination
  page?: number;
  limit?: number;
  hasMore?: boolean;
}

export interface ArticleListResponseData {
  articles: Article[];
  total: number;
}
