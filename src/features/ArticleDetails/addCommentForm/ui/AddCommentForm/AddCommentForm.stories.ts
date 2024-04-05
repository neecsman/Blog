import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";

const meta = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  parameters: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSendComment: (text: string) => console.log(text),
  },
};
