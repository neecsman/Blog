import type { Preview } from "@storybook/react";

import "../../src/app/styles/index.scss";
import themeDecorator from "./decorators/themeDecorator";
import routeDecorator from "./decorators/routeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const preview: Preview = {
  decorators: [themeDecorator(Theme.LIGHT), routeDecorator],
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
