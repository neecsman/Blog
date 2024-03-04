import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import storeDecorator from "../../../../../../config/storybook/decorators/storeDecorator";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {},
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {},
  decorators: [
    storeDecorator({
      loginForm: { username: "username", password: "123", isLoading: true },
    }),
  ],
};

export const withError: Story = {
  args: {},
  decorators: [
    storeDecorator({
      loginForm: {
        username: "username",
        password: "123",
        isLoading: false,
        error: "Error message",
      },
    }),
  ],
};
