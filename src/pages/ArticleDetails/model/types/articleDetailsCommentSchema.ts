import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities/Comment";

export interface ArticleDeatailsCommentSchema
  extends EntityState<Comment, number> {
  isLoading?: boolean;
  error?: string;
}
