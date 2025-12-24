import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const meta: Meta = {
  title: 'UI/Label',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => <Label>Your email address</Label>,
};

export const WithCheckbox: StoryObj = {
  name: 'With Checkbox',
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};
