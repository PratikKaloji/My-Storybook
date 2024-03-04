import { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Example/Loader",
  component: Loader,
  argTypes:{
    
  },
  tags:["autodocs"],
parameters: {
  layout: "centered",
},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { 
  loadersize:20  ,color:"green"
},

};
