import type { Meta, StoryObj } from "@storybook/react";
import { Input,  } from "./Input";


const meta: Meta<typeof Input> = {
  component: Input,
  title: "Example/Input",
  argTypes: {},
  tags: ["autodocs"],
  parameters:{
    layout:"centered"
  }
};
export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    placeholder: "enter text",
    label: "Label",
    variant: "default",
    Text:[]

  },
};
export const Success: Story = {
  args: {
    placeholder: "enter text",
    variant: "success",
    Text:[]

  },
};
export const Warning: Story = {
  args: {
    placeholder: "enter text",
    variant: "warning",
    Text:[]

  },
};
export const Input1: Story = {
  args: {
    placeholder: "enter text",
    variant: "input1",
    Text:[]


  },
};
export const Error: Story = {
  args: {
    placeholder: "enter text",
    variant: "error",
    Text:[]

  },
};
export const Disabled: Story = {
  args: {
    placeholder: "enter text",
    variant: "disabled",
    disabled:true,
    Text:[]

  },
};
