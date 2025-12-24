import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/bookademo/bookademo3';
import Component1 from '@/components/blocks/bookademo/bookademo1';
import Component2 from '@/components/blocks/bookademo/bookademo2';

const meta: Meta = {
  title: 'Blocks/Bookademo',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryBookademo3: StoryObj = {
  name: 'bookademo 3',
  render: () => <Component0 />,
};

export const StoryBookademo1: StoryObj = {
  name: 'bookademo 1',
  render: () => <Component1 />,
};

export const StoryBookademo2: StoryObj = {
  name: 'bookademo 2',
  render: () => <Component2 />,
};
