import type { Meta, StoryObj } from "@storybook/react";
import CommentList from "./CommentList";

const meta = {
  title: "entities/CommentList",
  component: CommentList,
  parameters: {},
} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: 1,
        text: "Какой-то комментарий 1",
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
      {
        id: 2,
        text: "Какой-то комментарий 2",
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
    ],
  },
};
