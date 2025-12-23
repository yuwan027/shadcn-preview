import type { Meta, StoryObj } from '@storybook/react';

import Help1 from '@/components/blocks/help/help1';
import Help2 from '@/components/blocks/help/help2';

const meta: Meta = {
  title: 'Blocks/Help',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Help1: StoryObj = {
  name: 'Help1',
  render: () => <Help1 />,
};

export const Help2: StoryObj = {
  name: 'Help2',
  render: () => <Help2 />,
};

