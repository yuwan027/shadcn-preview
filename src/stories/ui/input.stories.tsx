import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const meta: Meta = {
  title: 'UI/Input',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => <Input type="email" placeholder="Email" className="w-[300px]" />,
};

export const WithLabel: StoryObj = {
  name: 'With Label',
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  render: () => <Input disabled type="email" placeholder="Email" className="w-[300px]" />,
};

export const WithFile: StoryObj = {
  name: 'With File',
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
};
