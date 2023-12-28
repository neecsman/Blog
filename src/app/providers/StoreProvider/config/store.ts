import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import StateSchema from "./StateSchema";
import { conuterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export default function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: conuterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
