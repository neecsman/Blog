import type { Meta, StoryObj } from "@storybook/react";
import ProfileDetails from "./ProfileDetails";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "pages/Proflie",
  component: ProfileDetails,

  argTypes: {},
} satisfies Meta<typeof ProfileDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
