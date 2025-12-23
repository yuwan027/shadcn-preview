import type { Meta, StoryObj } from '@storybook/react';

import Process2 from '@/components/blocks/process/process2';
import Process3 from '@/components/blocks/process/process3';
import Process4 from '@/components/blocks/process/process4';

const meta: Meta = {
  title: 'Blocks/Process',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Process2: StoryObj = {
  name: 'Process2',
  render: () => <Process2 />,
};

export const Process3: StoryObj = {
  name: 'Process3',
  render: () => <Process3 />,
};

export const Process4: StoryObj = {
  name: 'Process4',
  render: () => <Process4 />,
};

