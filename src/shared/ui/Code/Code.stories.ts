import type { Meta, StoryObj } from "@storybook/react";
import Code from "./Code";

const meta = {
  title: "shared/Code",
  component: Code,
  parameters: {},
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
  },
};
