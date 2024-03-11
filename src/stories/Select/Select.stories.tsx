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

export const Default: Story = {
  args: {
    variant:"Default",
    label: "Label",
    placeholder: "Select option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
      { value: "option4", label: "Option 4" },
      { value: "option5", label: "Option 5" },
      { value: "option6", label: "Option 6" },
    ],
    // value: "Select",
    disabled: false,
    name:"name"
  },
};
export const Withicon: Story = {
  args: {
    ...Default.args,
    variant:"with Icon",
  },
};
export const Searchselect: Story = {
  args: {
    ...Default.args,
    variant:"search select",
    placeholder:"select"
  },
};
