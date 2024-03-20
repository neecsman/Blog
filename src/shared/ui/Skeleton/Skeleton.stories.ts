import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "./Skeleton";

const meta = {
  title: "shared/Skeleton",
  component: Skeleton,
  parameters: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "100px",
    height: "50px",
    border: "15px",
  },
};
