import { Theme } from "app/providers/ThemeProvider";
import { StoryFn } from "@storybook/react";

const themeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return <div className={`app ${theme}`}>{<Story />}</div>;
};

export default themeDecorator;
