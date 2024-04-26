import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import { Article, ArticleView } from "entities/Article";
import { StateSchema } from "app/providers/StoreProvider";
import {
  ArticleListResponseData,
  ArticlePageSchema,
} from "../types/articlePageSchema";
import { fetchArticlesList } from "../api/fetchArtilcesList/fetchArticlesList";
import { VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const articlesAdapter = createEntityAdapter({
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

export const articlesPageSlice = createSlice({
  name: "articleSlice",
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.GRID,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.ROW ? 4 : 12;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<ArticleListResponseData>) => {
          state.isLoading = false;
          articlesAdapter.addMany(state, action.payload.articles);
          state.hasMore = state.ids.length < action.payload.total;
        }
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageAction } = articlesPageSlice;
export const { reducer: artilcesPageReducer } = articlesPageSlice;
