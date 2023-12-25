import type { Meta, StoryObj } from "@storybook/react";
import About from "./About";

const meta = {
  title: "pages/About",
  component: About,
  parameters: {
    // layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof About>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
