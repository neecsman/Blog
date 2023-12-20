import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { StoryFn } from "@storybook/react";

const themeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <ThemeProvider>
      <div className={`app storybook_wrapper ${theme}`}>{<Story />}</div>
    </ThemeProvider>
  );
};

export default themeDecorator;
