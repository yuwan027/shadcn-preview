import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/community/community3';
import Component1 from '@/components/blocks/community/community4';
import Component2 from '@/components/blocks/community/community5';
import Component3 from '@/components/blocks/community/community6';
import Component4 from '@/components/blocks/community/community7';

const meta: Meta = {
  title: 'Blocks/Community',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryCommunity3: StoryObj = {
  name: 'community 3',
  render: () => <Component0 />,
};

export const StoryCommunity4: StoryObj = {
  name: 'community 4',
  render: () => <Component1 />,
};

export const StoryCommunity5: StoryObj = {
  name: 'community 5',
  render: () => <Component2 />,
};

export const StoryCommunity6: StoryObj = {
  name: 'community 6',
  render: () => <Component3 />,
};

export const StoryCommunity7: StoryObj = {
  name: 'community 7',
  render: () => <Component4 />,
};

