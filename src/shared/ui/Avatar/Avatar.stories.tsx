import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "shared/ui";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSource: Story = {
  args: {
    src: "https://ru-static.z-dn.net/files/d96/ced913ba9fe71679ae395a4be5fac683.jpg",
    alt: "Avatar",
    gender: "male",
  },
};

export const EmptySourceMale: Story = {
  args: { src: "", alt: "Avatar", gender: "male" },
};

export const EmptySourceFemale: Story = {
  args: {
    src: "",
    alt: "Avatar",
    gender: "female",
  },
};
