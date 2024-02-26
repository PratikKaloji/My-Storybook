import { Meta, StoryObj } from "@storybook/react";
import { Dropdown,  } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "Example/Dropdown",
  parameters:{
    layout:"centered"
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultDropdown: Story = {
  args: {
    label: "Label",
  },
};
