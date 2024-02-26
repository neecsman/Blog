import { StoryContext, StoryFn } from "@storybook/react";

const themeDecorator = (Story: StoryFn, context: StoryContext) => {
  const theme = context.globals.theme;

  return <div className={`app storybook_wrapper ${theme}`}>{<Story />}</div>;
};

export default themeDecorator;
