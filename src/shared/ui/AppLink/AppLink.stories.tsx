import type { Meta, StoryObj } from "@storybook/react";
import AppLink, { AppLinkTheme } from "./AppLink";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../../config/storybook/decorators/themeDecorator";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {},
  args: {
    to: "/",
  },
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Link",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Link",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    children: "Link",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const SecondaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    children: "Link",
    theme: AppLinkTheme.SECONDARY,
  },
};
