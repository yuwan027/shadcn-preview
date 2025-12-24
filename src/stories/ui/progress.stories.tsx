import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components/ui/progress';

const meta: Meta = {
  title: 'UI/Progress',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => <Progress value={33} className="w-[300px]" />,
};

export const HalfComplete: StoryObj = {
  name: 'Half Complete',
  render: () => <Progress value={50} className="w-[300px]" />,
};

export const Complete: StoryObj = {
  name: 'Complete',
  render: () => <Progress value={100} className="w-[300px]" />,
};
