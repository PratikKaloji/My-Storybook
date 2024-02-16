import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Example/Checkbox",
  tags:["autodocs"]

};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label:"Enter label"
   
  },
};
export const Pressed: Story = {
  args: {
    label:"Enter label"

  },
};
export const Disabled: Story = {
  args: {
    label:"Enter label",
    disabled:true
  },
};
