export type SortOrder = "asc" | "desc";

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "created_at",
}

export interface ArticleSortSchema {
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
}
