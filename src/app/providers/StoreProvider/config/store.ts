import { configureStore } from "@reduxjs/toolkit";
import StateSchema from "./StateSchema";
import { conuterReducer } from "entities/Counter";

export default function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: conuterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
