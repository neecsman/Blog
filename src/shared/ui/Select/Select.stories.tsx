import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "shared/ui";

const meta = {
  title: "shared/Select",
  component: Select,
  parameters: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { title: "1", value: "Первое значение" },
      { title: "2", value: "Второе значение" },
      { title: "3", value: "Третье значение" },
    ],
    placeholder: "Выберите значение",
  },
};
