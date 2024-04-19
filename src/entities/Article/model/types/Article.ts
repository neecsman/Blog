export interface Article {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  created_at: Date;
  updated_at: Date;
  tags: ArticleTagsType[];
  blocks: ArticleBlock[];
  comments: Comment[];
}

export enum ArticleTagsType {
  IT = "IT",
  SCIENCE = "SCIENS",
  DIGITAL = "DIGITAL",
  TECH = "TECH",
  GAMES = "GAMES",
  FINANCE = "FINANCE",
}

export enum ArticleView {
  GRID = "grid",
  ROW = "row",
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleImageBlock
  | ArticleCodetBlock;

export type Paragraph = {
  id: number;
  text: string;
};

export interface ArticleBlockBase {
  id: number;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: Paragraph[];
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}
export interface ArticleCodetBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export enum ArticleBlockType {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

export type Comment = {
  id: number;
  text: string;
  created_at: Date;
};
