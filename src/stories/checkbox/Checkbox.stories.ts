import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Example/Checkbox",
  tags:["autodocs"],
  parameters:{
    layout:"centered"
  }

};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label:"Enter label",
    onChange: (checked: boolean) => {
      console.log('Checkbox state changed:', checked);
    },
   
  },
};
export const Pressed: Story = {
  args: {
    label:"Enter label",
    onChange: (checked: boolean) => {
      console.log('Checkbox state changed:', checked);
    },

  },
};
export const Disabled: Story = {
  args: {
    label:"Enter label",
    disabled:true
  },
};
