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

export const ButtonText: Story = {
  args: {
    children: "Button",
    variant: ButtonVariant.SOLID,
  },
};

export const ButtonIcon: Story = {
  args: {
    icon: <Collapse />,
    variant: ButtonVariant.SOLID,
    size: ButtonSize.L,
  },
};
