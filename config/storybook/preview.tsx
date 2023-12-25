import themeDecorator from "./decorators/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import "../../src/app/styles/index.scss";

import type { Preview } from "@storybook/react";
import globalDecorator from "./decorators/globalDecorator";

const preview: Preview = {
  decorators: [globalDecorator],
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
  theme: {
    description: "Global theme for components",
    defaultValue: Theme.LIGHT,
    toolbar: {
      title: "Theme",
      icon: "circlehollow",
      items: [Theme.LIGHT, Theme.DARK],
      dynamicTitle: true,
    },
  },
};
