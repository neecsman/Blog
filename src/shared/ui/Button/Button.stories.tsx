import type { Meta, StoryObj } from "@storybook/react";
import Button, { VariantButton } from "./Button";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../../config/storybook/decorators/themeDecorator";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {},

  tags: ["autodocs"],

  argTypes: {
    variant: VariantButton,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Clear: Story = {
  args: {
    children: "Button",
    variant: VariantButton.CLEAR,
  },
};

export const Outline: Story = {
  decorators: [themeDecorator(Theme.LIGHT)],
  args: {
    children: "Button",
    variant: VariantButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    children: "Button",
    variant: VariantButton.OUTLINE,
  },
};
