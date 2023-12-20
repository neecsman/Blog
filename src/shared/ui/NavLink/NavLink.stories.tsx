import type { Meta, StoryObj } from "@storybook/react";
import AppLink, { NavLinkTheme } from "./NavLink";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../../config/storybook/decorators/themeDecorator";

const meta = {
  title: "shared/NavLink",
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
    theme: NavLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Link",
    theme: NavLinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    children: "Link",
    theme: NavLinkTheme.PRIMARY,
  },
};

export const SecondaryDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    children: "Link",
    theme: NavLinkTheme.SECONDARY,
  },
};
