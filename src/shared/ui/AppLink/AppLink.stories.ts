import type { Meta, StoryObj } from "@storybook/react";
import AppLink from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {},
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/",
    children: "Ссылка",
  },
};
