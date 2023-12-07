import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const routeDecorator = (Story: StoryFn) => {
  return <BrowserRouter>{<Story />}</BrowserRouter>;
};

export default routeDecorator;
