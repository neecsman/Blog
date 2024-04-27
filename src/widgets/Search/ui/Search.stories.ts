import type { Meta, StoryObj } from "@storybook/react";
import Search from "./Search";

const meta = {
  title: "shared/Search",
  component: Search,
  parameters: {},
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
