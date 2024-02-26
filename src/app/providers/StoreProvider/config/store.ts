import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { conuterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { createReducerManager } from "./reducerManager";
import { useDispatch } from "react-redux";

export default function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: conuterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
