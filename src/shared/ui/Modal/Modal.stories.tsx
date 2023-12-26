import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ex ipsum dolorem, laborum dolores soluta libero nulla non distinctio a quo ratione aut minima, sit perspiciatis cupiditate et odio id!",
    isOpen: false,
  },
};
