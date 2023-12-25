import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../../config/storybook/decorators/themeDecorator";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  parameters: {
    // layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
