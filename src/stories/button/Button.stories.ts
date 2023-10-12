import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'atom/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    children : "Button",
    variant: "default"
  },
};
 
export const Outline :  Story = {
  args: {
    children : "Button",
    variant: "outline"
  },
};

export const Ghost :  Story = {
  args: {
    children : "Button",
    variant: "ghost",
  },
};

export const Link :  Story = {
  args: {
    children : "Button",
    variant: "link",
  },
};
