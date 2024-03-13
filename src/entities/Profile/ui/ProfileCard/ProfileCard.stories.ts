import type { Meta, StoryObj } from "@storybook/react";
import ProfileCard from "./ProfileCard";
import { Theme } from "app/providers/ThemeProvider";
import { Country, Currency } from "shared/const/common";
import { Gender } from "entities/Profile/model/types/profile";

const meta = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  parameters: {
    // layout: "centered",
  },

  argTypes: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      username: "jarvice",
      firstname: "Tony",
      lastname: "Stark",
      avatar: "",
      gender: Gender.MALE,
      country: Country.Russia,
      currency: Currency.USD,
      city: "Москва",
      birthday: { day: "01", month: "01", year: "1985" },
    },
  },
};

export const Loading: Story = {
  args: {
    data: {
      username: "jarvice",
      firstname: "Tony",
      lastname: "Stark",
      avatar: "",
      gender: Gender.MALE,
      country: Country.Russia,
      currency: Currency.USD,
      city: "Москва",
      birthday: { day: "01", month: "01", year: "1985" },
    },
    isLoading: true,
  },
};

export const Readonly: Story = {
  args: {
    data: {
      username: "jarvice",
      firstname: "Tony",
      lastname: "Stark",
      avatar: "",
      gender: Gender.MALE,
      country: Country.Russia,
      currency: Currency.USD,
      city: "Москва",
      birthday: { day: "01", month: "01", year: "1985" },
    },
    isReadonly: true,
  },
};

export const Error: Story = {
  args: {
    error: "Ошибка при загрузке",
  },
};
