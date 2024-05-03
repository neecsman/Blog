export type FilterOrderBy = "asc" | "desc";

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "created_at",
}

export interface ArticleSortSchema {
  order: FilterOrderBy;
  sort: ArticleSortField;
}
