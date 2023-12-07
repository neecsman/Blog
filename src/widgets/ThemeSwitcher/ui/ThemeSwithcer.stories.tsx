import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../../config/storybook/decorators/themeDecorator";

const meta = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    // layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [themeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
};
