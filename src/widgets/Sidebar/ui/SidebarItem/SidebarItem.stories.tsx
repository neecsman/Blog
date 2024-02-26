import type { Meta, StoryObj } from "@storybook/react";
import SidebarItem, { SidebarItemTheme } from "./SidebarItem";

const meta = {
  title: "shared/SidebarItem",
  component: SidebarItem,
  parameters: {},
  args: {
    to: "/",
  },

  argTypes: {},
} satisfies Meta<typeof SidebarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Link",
    theme: SidebarItemTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Link",
    theme: SidebarItemTheme.SECONDARY,
  },
};
