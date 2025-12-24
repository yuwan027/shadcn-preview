import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const meta: Meta = {
  title: 'UI/Textarea',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => <Textarea placeholder="Type your message here." className="w-[300px]" />,
};

export const WithLabel: StoryObj = {
  name: 'With Label',
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" className="w-[300px]" />
    </div>
  ),
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  render: () => <Textarea placeholder="Type your message here." disabled className="w-[300px]" />,
};
