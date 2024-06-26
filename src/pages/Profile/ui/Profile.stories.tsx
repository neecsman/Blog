import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";


const meta = {
  title: "pages/Proflie",
  component: Profile,

  argTypes: {},
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
