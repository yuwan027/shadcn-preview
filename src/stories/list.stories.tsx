import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/list/list1';
import Component1 from '@/components/blocks/list/list3';

const meta: Meta = {
  title: 'Blocks/List',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryList1: StoryObj = {
  name: 'list 1',
  render: () => <Component0 />,
};

export const StoryList3: StoryObj = {
  name: 'list 3',
  render: () => <Component1 />,
};

