import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../";
import { StateSchema } from "../config/StateSchema";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: Partial<StateSchema>;
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(initialState as StateSchema, asyncReducers);
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
