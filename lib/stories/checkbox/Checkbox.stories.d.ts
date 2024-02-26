import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
declare const meta: Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Pressed: Story;
export declare const Disabled: Story;
