import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ArticleSortField,
  ArticleSortSchema,
  SortOrder,
} from "../types/articleSortSchema";

const initialState: ArticleSortSchema = {
  order: "asc",
  sort: ArticleSortField.CREATED,
  search: "",
};

export const articleSortSlice = createSlice({
  name: "articleSort",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { actions: articleSortActions } = articleSortSlice;
export const { reducer: articleSortReducer } = articleSortSlice;
