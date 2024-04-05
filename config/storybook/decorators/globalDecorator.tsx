import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { StoryContext, StoryFn } from "@storybook/react";
import { Suspense, useEffect } from "react";
import i18n from "../i18n";
import Loader from "shared/ui/Loader/Loader";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/providers/StoreProvider";

import { loginReducer } from "features/Auth/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoadert";
import { profileReducer } from "features/Profile";
import { artilceDetailReducer } from "entities/Article/model/slice/articleDetailSlice";
import { addCommentFormReducer } from "features/ArticleDetails/addCommentForm/model/slices/addCommentFormSlice";

const globalDecorator = (Story: StoryFn, context: StoryContext) => {
  const { locale, theme = Theme.LIGHT } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetail: artilceDetailReducer,
    addCommentForm: addCommentFormReducer,
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
