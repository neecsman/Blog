import themeDecorator from "./decorators/themeDecorator";
import routeDecorator from "./decorators/routeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import i18nDecorator from "./decorators/i18nDecorator";

import "../../src/app/styles/index.scss";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [themeDecorator(Theme.LIGHT), i18nDecorator, routeDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "ru", title: "Russian" },
        { value: "en", title: "English" },
      ],
      showName: true,
    },
  },
};
