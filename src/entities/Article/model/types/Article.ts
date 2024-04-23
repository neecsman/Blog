import { User } from "entities/User";

export interface Article {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  created_at: string;
  updated_at: string;
  author: User;
  tags: { id: number; type: ArticleTagsType }[];
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
  | ArticleTextBlockType
  | ArticleImageBlockType
  | ArticleCodetBlockType;

export type Paragraph = {
  id: number;
  text: string;
};

export interface ArticleBlockBase {
  id: number;
  type: ArticleBlockType;
}

export interface ArticleTextBlockType extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: Paragraph[];
}
export interface ArticleImageBlockType extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}
export interface ArticleCodetBlockType extends ArticleBlockBase {
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
