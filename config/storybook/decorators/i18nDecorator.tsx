import { Suspense, useEffect } from "react";
import { StoryContext, StoryFn } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Loader } from "shared/ui";

const i18nDecorator = (Story: StoryFn, context: StoryContext) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<Loader />}>
      <I18nextProvider i18n={i18n}>{<Story />}</I18nextProvider>
    </Suspense>
  );
};

export default i18nDecorator;
