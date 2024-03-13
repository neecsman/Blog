import type { Meta, StoryObj } from "@storybook/react";
import { Gender } from "entities/Profile/model/types/profile";
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
    gender: Gender.MALE,
  },
};

export const EmptySourceMale: Story = {
  args: { src: "", alt: "Avatar", gender: Gender.MALE },
};

export const EmptySourceFemale: Story = {
  args: {
    src: "",
    alt: "Avatar",
    gender: Gender.FEMALE,
  },
};
