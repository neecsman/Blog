import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "../Sidebar/Sidebar";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../../../config/storybook/decorators/themeDecorator";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {
    // layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
