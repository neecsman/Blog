import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { StoryFn } from "@storybook/react";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

const storeDecorator =
  (
    state: Partial<StateSchema>,
    asyncReducer?: Partial<ReducersMapObject<StateSchema>>
  ) =>
  (Story: StoryFn) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}
      >
        <Story />
      </StoreProvider>
    );
  };

export default storeDecorator;
