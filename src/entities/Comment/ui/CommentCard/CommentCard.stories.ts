import type { Meta, StoryObj } from "@storybook/react";
import CommentCard from "./CommentCard";

const meta = {
  title: "entities/CommentCard",
  component: CommentCard,
  parameters: {},
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comment: {
      id: 1,
      text: "Какой-то комментарий",
      created_at: new Date(),
      updated_at: new Date(),
      user: {
        id: 1,
        username: "username",
        firstname: "David",
        lastname: "Gilmour",
        email: "example@mail.ru",
        avatar: "",
      },
    },
  },
};
