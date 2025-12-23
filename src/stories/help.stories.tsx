import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/help/help1';
import Component1 from '@/components/blocks/help/help2';

const meta: Meta = {
  title: 'Blocks/Help',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryHelp1: StoryObj = {
  name: 'help 1',
  render: () => <Component0 />,
};

export const StoryHelp2: StoryObj = {
  name: 'help 2',
  render: () => <Component1 />,
};

