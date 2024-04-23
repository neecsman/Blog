import type { Meta, StoryObj } from "@storybook/react";
import Article from "./Articles";

const meta = {
  title: "pages/Article",
  component: Article,
  parameters: {},
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
