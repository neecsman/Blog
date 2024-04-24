import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchNextArticlesList } from "./fetchNextArticleList";
import { ArticleView } from "entities/Article";
import { fetchArticlesList } from "../fetchArtilcesList/fetchArticlesList";

jest.mock("../fetchArtilcesList/fetchArticlesList.ts");

describe("fetchNextArticleList.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        page: 1,
        isLoading: false,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: true,
        view: ArticleView.GRID,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 2 });
  });

  test("fetcArticleList not called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        page: 1,
        isLoading: false,
        ids: [],
        entities: {},
        limit: 5,
        hasMore: false,
        view: ArticleView.GRID,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
