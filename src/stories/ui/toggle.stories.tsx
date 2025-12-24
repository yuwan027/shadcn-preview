import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

const meta: Meta = {
  title: 'UI/Toggle',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const Outline: StoryObj = {
  name: 'Outline',
  render: () => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
};

export const WithText: StoryObj = {
  name: 'With Text',
  render: () => (
    <Toggle aria-label="Toggle underline">
      <Underline className="h-4 w-4" />
      Underline
    </Toggle>
  ),
};

export const Sizes: StoryObj = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="sm" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="default" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const Disabled: StoryObj = {
  name: 'Disabled',
  render: () => (
    <Toggle aria-label="Toggle bold" disabled>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};
