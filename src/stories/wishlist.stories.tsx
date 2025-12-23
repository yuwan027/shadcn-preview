import type { Meta, StoryObj } from '@storybook/react';

import Wishlist1 from '@/components/blocks/wishlist/wishlist1';
import Wishlist2 from '@/components/blocks/wishlist/wishlist2';

const meta: Meta = {
  title: 'Blocks/Wishlist',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Wishlist1: StoryObj = {
  name: 'Wishlist1',
  render: () => <Wishlist1 />,
};

export const Wishlist2: StoryObj = {
  name: 'Wishlist2',
  render: () => <Wishlist2 />,
};

