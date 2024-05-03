import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ArticleSortField,
  ArticleSortSchema,
  FilterOrderBy,
} from "../types/articleFilterSchema";

const initialState: ArticleSortSchema = {
  order: "asc",
  sort: ArticleSortField.CREATED,
};

export const articleSortSlice = createSlice({
  name: "articleSort",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<FilterOrderBy>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
  },
});

export const { actions: articleSortActions } = articleSortSlice;
export const { reducer: articleSortReducer } = articleSortSlice;
