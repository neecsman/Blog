import type { Meta, StoryObj } from "@storybook/react";
import TemplateName from "./TemplateName";

const meta = {
  title: "pages/TemplateName",
  component: TemplateName,
  parameters: {},
} satisfies Meta<typeof TemplateName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
