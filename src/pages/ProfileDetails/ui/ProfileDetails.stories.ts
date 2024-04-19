import type { Meta, StoryObj } from "@storybook/react";
import ProfileDetails from "./ProfileDetails";

const meta = {
  title: "pages/ProflieDetails",
  component: ProfileDetails,

  argTypes: {},
} satisfies Meta<typeof ProfileDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
