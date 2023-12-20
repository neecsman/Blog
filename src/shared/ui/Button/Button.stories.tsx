import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonSize, ButtonVariant } from "./Button";
import { Theme } from "app/providers/ThemeProvider";
import themeDecorator from "../../../../config/storybook/decorators/themeDecorator";

import Collapse from "shared/assets/icons/hamburger-sidebar.svg";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {},
  argTypes: {
    variant: ButtonVariant,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonLight: Story = {
  args: {
    children: "Button",
    variant: ButtonVariant.SOLID,
  },
};

export const ButtonDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    children: "Button",
    variant: ButtonVariant.SOLID,
  },
};

export const ButtonIconLight: Story = {
  args: {
    icon: <Collapse />,
    variant: ButtonVariant.SOLID,
    size: ButtonSize.L,
    square: true,
  },
};

export const ButtonIconDark: Story = {
  decorators: [themeDecorator(Theme.DARK)],
  args: {
    icon: <Collapse />,
    variant: ButtonVariant.SOLID,
    size: ButtonSize.L,
    square: true,
  },
};
