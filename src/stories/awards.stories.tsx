import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/awards/awards3';
import Component1 from '@/components/blocks/awards/awards4';
import Component2 from '@/components/blocks/awards/awards5';

const meta: Meta = {
  title: 'Blocks/Awards',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryAwards3: StoryObj = {
  name: 'awards 3',
  render: () => <Component0 />,
};

export const StoryAwards4: StoryObj = {
  name: 'awards 4',
  render: () => <Component1 />,
};

export const StoryAwards5: StoryObj = {
  name: 'awards 5',
  render: () => <Component2 />,
};

