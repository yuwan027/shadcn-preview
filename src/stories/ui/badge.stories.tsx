import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge';

const meta: Meta = {
  title: 'UI/Badge',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => <Badge>Badge</Badge>,
};

export const Secondary: StoryObj = {
  name: 'Secondary',
  render: () => <Badge variant="secondary">Secondary</Badge>,
};

export const Destructive: StoryObj = {
  name: 'Destructive',
  render: () => <Badge variant="destructive">Destructive</Badge>,
};

export const Outline: StoryObj = {
  name: 'Outline',
  render: () => <Badge variant="outline">Outline</Badge>,
};

export const AllVariants: StoryObj = {
  name: 'All Variants',
  render: () => (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
