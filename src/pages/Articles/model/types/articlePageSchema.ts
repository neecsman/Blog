import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";

export interface ArticlePageSchema extends EntityState<Article, number> {
  isLoading: boolean;
  error?: string;

  //pagination
  page?: number;
  limit?: number;
  hasMore?: boolean;

  //filter
  view: ArticleView;
  _inited: boolean;
}

export interface ArticleListResponseData {
  articles: Article[];
  total: number;
}
