import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const meta: Meta = {
  title: 'UI/Switch',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => <Switch />,
};

export const WithLabel: StoryObj = {
  name: 'With Label',
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled">Disabled</Label>
    </div>
  ),
};
