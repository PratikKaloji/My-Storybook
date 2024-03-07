import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Example/Input",
  argTypes: { variant: { control: { type: "select" } } },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "enter text",
    label: "Label",
    variant: "default",
    Text: [],
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input value changed:", event.target.value);
    },
    name: "",
    type: "",
  },
};
export const Success: Story = {
  args: {
    placeholder: "enter text",
    label: "Label",
    variant: "success",
    Text: [],
    success: true,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input value changed:", event.target.value);
    },
    name: "",
    type: "",
  },
};
export const Warning: Story = {
  args: {
    placeholder: "enter text",
    label: "Label",
    variant: "warning",
    Text: [],
    warning: true,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input value changed:", event.target.value);
    },
    name: "",
    type: "",
  },
};
export const Input1: Story = {
  args: {
    placeholder: "enter text",
    label: "Label",
    variant: "input1",
    Text: [],
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input value changed:", event.target.value);
    },
    name: "",
    type: "",
  },
};
export const Error: Story = {
  args: {
    placeholder: "enter text",
    label: "Label",
    variant: "error",
    Text: [],
    error: true,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input value changed:", event.target.value);
    },
    name: "",
    type: "",
  },
};
// export const Disabled: Story = {
//   args: {
//     placeholder: "enter text",
//     variant: "disabled",
//     disabled: true,
//     Text: [],
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
//       console.log("Input value changed:", event.target.value);
//     },
//     name: "",
//     type: "",
//   },
// };
