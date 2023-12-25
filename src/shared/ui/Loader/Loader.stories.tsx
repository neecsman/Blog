import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../../config/storybook/decorators/themeDecorator";

const meta = {
  title: "shared/Loader",
  component: Loader,
  parameters: {
    // layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
