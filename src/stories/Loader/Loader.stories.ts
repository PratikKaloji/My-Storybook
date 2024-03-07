import { Meta, StoryObj } from "@storybook/react";
import {Loader} from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Example/Loader",
  component: Loader,
  argTypes: {
    variant: { control: { type: "select" } },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loadersize: 20,
    borderWidth: 3,
    variant: "Default",
  },
};
export const Loader1: Story = {
  args: {
    ...Default.args,
    variant: "Loader1",
  },
};
export const Loader2: Story = {
  args: {
    ...Default.args,
    variant: "Loader2",
  },
};
export const Loader3: Story = {
  args: {
    ...Default.args,
    variant: "Loader3",
  },
};
