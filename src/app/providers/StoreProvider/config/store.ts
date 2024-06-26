import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { useDispatch } from "react-redux";
import api from "shared/api/api";

import { scrollSaveReducer } from "features/ScrollSave";

export default function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSave: scrollSaveReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as unknown as ReducersMapObject<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: extraArg } }),
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
