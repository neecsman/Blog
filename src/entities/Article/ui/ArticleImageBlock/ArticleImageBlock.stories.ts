import type { Meta, StoryObj } from "@storybook/react";
import ArticleImageBlock from "./ArticleImageBlock";
import { ArticleBlockType } from "entities/Article/model/types/article";

const meta = {
  title: "entities/ArticleDetails/ImageBlock",
  component: ArticleImageBlock,
  parameters: {},
} satisfies Meta<typeof ArticleImageBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleImage: Story = {
  args: {
    block: {
      id: 1,
      type: ArticleBlockType.IMAGE,
      title: "Lorem ipsum dolor sit amet",
      src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/282/564/2d0/2825642d0e8b41dc4042b54d0898049a.png",
    },
  },
};
