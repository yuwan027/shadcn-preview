import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Mail, Loader2, ChevronRight } from 'lucide-react';

const meta: Meta = {
  title: 'UI/Button',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => <Button>Button</Button>,
};

export const Secondary: StoryObj = {
  name: 'Secondary',
  render: () => <Button variant="secondary">Secondary</Button>,
};

export const Destructive: StoryObj = {
  name: 'Destructive',
  render: () => <Button variant="destructive">Destructive</Button>,
};

export const Outline: StoryObj = {
  name: 'Outline',
  render: () => <Button variant="outline">Outline</Button>,
};

export const Ghost: StoryObj = {
  name: 'Ghost',
  render: () => <Button variant="ghost">Ghost</Button>,
};

export const Link: StoryObj = {
  name: 'Link',
  render: () => <Button variant="link">Link</Button>,
};

export const WithIcon: StoryObj = {
  name: 'With Icon',
  render: () => (
    <Button>
      <Mail /> Login with Email
    </Button>
  ),
};

export const Loading: StoryObj = {
  name: 'Loading',
  render: () => (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  ),
};

export const Sizes: StoryObj = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <ChevronRight />
      </Button>
    </div>
  ),
};

export const AllVariants: StoryObj = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};
