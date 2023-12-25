import type { Meta, StoryObj } from "@storybook/react";
import NotFound from "./NotFound";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../../config/storybook/decorators/themeDecorator";

const meta = {
  title: "pages/NotFound",
  component: NotFound,

  argTypes: {},
} satisfies Meta<typeof NotFound>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
