import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Example/Select",
  argTypes: {
    variant: {
      control: { type: "select" },
    //   onChange: { action: 'changed' },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  args: {
    label: "Label",
    placeholder: "Select option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    // value: "Select",
    disabled: false,
  },
};
