export interface Article {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  created_at: Date;
  updated_at: Date;
  tags: ArticleTags[];
  blocks: ArticleBlock[];
  comments: Comment[];
}

export enum ArticleTags {
  IT = "IT",
  SCIENCE = "SCIENS",
  DIGITAL = "DIGITAL",
  TECH = "TECH",
  GAMES = "GAMES",
  FINANCE = "FINANCE",
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleImageBlock
  | ArticleCodetBlock;

export interface ArticleBlockBase {
  id: number;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
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
