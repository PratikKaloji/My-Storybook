import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled:{control:'boolean'}
   
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type:"primary",
    label: 'Button',
    disabled:false
  },
};

export const Secondary: Story = {
  args: {
    type:"secondary",
    label: 'Button',
    disabled:false
  },
};

export const Danger: Story = {
  args: {
    type:"danger",
    label: 'Button',
    disabled:false

  },
};

export const Success: Story = {
  args: {
    type:"success",
    label: 'Button',
    disabled:false
  },
};

