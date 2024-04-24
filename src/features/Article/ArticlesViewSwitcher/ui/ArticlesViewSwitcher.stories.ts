import type { Meta, StoryObj } from "@storybook/react";
import ArticlesViewSwitcher from "./ArticlesViewSwitcher";
import { ArticleView } from "entities/Article";

const meta = {
  title: "shared/ArticlesViewSwitcher",
  component: ArticlesViewSwitcher,
  parameters: {},
} satisfies Meta<typeof ArticlesViewSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { view: ArticleView.GRID },
};
