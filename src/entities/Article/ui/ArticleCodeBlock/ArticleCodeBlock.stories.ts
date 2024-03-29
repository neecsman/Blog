import type { Meta, StoryObj } from "@storybook/react";
import ArticleCodeBlock from "./ArticleCodeBlock";
import { ArticleBlockType } from "entities/Article/model/types/article";

const meta = {
  title: "entities/ArticleCodeBlock",
  component: ArticleCodeBlock,
  parameters: {},
} satisfies Meta<typeof ArticleCodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleText: Story = {
  args: {
    block: {
      id: 1,
      type: ArticleBlockType.CODE,
      code: `<!DOCTYPE html>
      <html>
        <body>
          <p id="hello"></p>
      
          <script>
            document.getElementById("hello").innerHTML = "Hello, world!";
          </script>
        </body>
      </html>`,
    },
  },
};
