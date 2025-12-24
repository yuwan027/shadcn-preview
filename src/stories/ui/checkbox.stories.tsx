import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const meta: Meta = {
  title: 'UI/Checkbox',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => <Checkbox />,
};

export const WithLabel: StoryObj = {
  name: 'With Label',
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" disabled />
      <Label htmlFor="terms2">Accept terms and conditions</Label>
    </div>
  ),
};
