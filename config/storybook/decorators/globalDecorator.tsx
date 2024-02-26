import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { StoryContext, StoryFn } from "@storybook/react";
import { Suspense, useEffect } from "react";
import i18n from "../i18n";
import Loader from "shared/ui/Loader/Loader";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const globalDecorator = (Story: StoryFn, context: StoryContext) => {
  const { locale, theme = Theme.LIGHT } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
  };

  return (
    <BrowserRouter>
      <StoreProvider asyncReducers={defaultAsyncReducers}>
        <ThemeProvider>
          <Suspense fallback={<Loader />}>
            <I18nextProvider i18n={i18n}>
              <div className={`app storybook_wrapper ${theme}`}>
                {<Story />}
              </div>
            </I18nextProvider>
          </Suspense>
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default globalDecorator;
