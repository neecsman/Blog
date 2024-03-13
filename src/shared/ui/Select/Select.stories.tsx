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
      { value: "1", title: "Первое значение" },
      { value: "2", title: "Второе значение" },
      { value: "3", title: "Третье значение" },
    ],
    placeholder: "Выберите значение",
  },
};
