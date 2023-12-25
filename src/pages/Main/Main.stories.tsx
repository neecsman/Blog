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

  argTypes: {},
} satisfies Meta<typeof Main>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
