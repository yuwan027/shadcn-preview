import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/compliance/compliance5';
import Component1 from '@/components/blocks/compliance/compliance6';
import Component2 from '@/components/blocks/compliance/compliance7';

const meta: Meta = {
  title: 'Blocks/Compliance',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryCompliance5: StoryObj = {
  name: 'compliance 5',
  render: () => <Component0 />,
};

export const StoryCompliance6: StoryObj = {
  name: 'compliance 6',
  render: () => <Component1 />,
};

export const StoryCompliance7: StoryObj = {
  name: 'compliance 7',
  render: () => <Component2 />,
};

