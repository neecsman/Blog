import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "shared/ui";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Some text" },
};
