import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/process/process2';
import Component1 from '@/components/blocks/process/process3';
import Component2 from '@/components/blocks/process/process4';

const meta: Meta = {
  title: 'Blocks/Process',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryProcess2: StoryObj = {
  name: 'process 2',
  render: () => <Component0 />,
};

export const StoryProcess3: StoryObj = {
  name: 'process 3',
  render: () => <Component1 />,
};

export const StoryProcess4: StoryObj = {
  name: 'process 4',
  render: () => <Component2 />,
};

