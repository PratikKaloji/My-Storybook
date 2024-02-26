import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";


const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Example/Radio",
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "enter label",
    value: 'option1',
    onChange: (value: string) => {
      console.log("Selected option:", value);
    },
  },
};
export const Checked: Story = {
  args: {
    label: "enter label",
    checked: true,
    value: 'option2',
    onChange: (value: string) => {
      console.log("Selected option:", value);
    },
  },
};
export const Disabled: Story = {
  args: {
    label: "enter label",
    disabled: true,
    // value: 'option1',
    onChange: (value: string) => {
      console.log("Selected option:", value);
    },
  },
};
