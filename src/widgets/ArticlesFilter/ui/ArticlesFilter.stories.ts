import type { Meta, StoryObj } from "@storybook/react";
import ArticlesFilter from "./ArticlesFilter";

const meta = {
  title: "shared/ArticlesFilter",
  component: ArticlesFilter,
  parameters: {},
} satisfies Meta<typeof ArticlesFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
