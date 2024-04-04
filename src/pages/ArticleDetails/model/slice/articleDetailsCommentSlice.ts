import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { ArticleDeatailsCommentSchema } from "../types/articleDetailsCommentSchema";
import { fetchCommentsByArticleId } from "../api/fetchCommentsByArticleId/fetchCommentsByArticleId";

const commentAdapter = createEntityAdapter({
  selectId: (comment: Comment) => comment.id,
});

export const getArticleComment = commentAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsComments",
  initialState: commentAdapter.getInitialState<ArticleDeatailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false;
          commentAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice;
export const { actions: articleDetailsCommentsActions } =
  articleDetailsCommentsSlice;
