import type { Meta, StoryObj } from "@storybook/react";
import Main from "./Main";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../config/storybook/decorators/themeDecorator";

const meta = {
  title: "pages/Main",
  component: Main,
  parameters: {
    // layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Main>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
