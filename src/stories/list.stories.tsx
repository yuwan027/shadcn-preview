import type { Meta, StoryObj } from '@storybook/react';

import List1 from '@/components/blocks/list/list1';
import List3 from '@/components/blocks/list/list3';

const meta: Meta = {
  title: 'Blocks/List',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const List1: StoryObj = {
  name: 'List1',
  render: () => <List1 />,
};

export const List3: StoryObj = {
  name: 'List3',
  render: () => <List3 />,
};

