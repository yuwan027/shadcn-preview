import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/wishlist/wishlist1';
import Component1 from '@/components/blocks/wishlist/wishlist2';

const meta: Meta = {
  title: 'Blocks/Wishlist',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryWishlist1: StoryObj = {
  name: 'wishlist 1',
  render: () => <Component0 />,
};

export const StoryWishlist2: StoryObj = {
  name: 'wishlist 2',
  render: () => <Component1 />,
};

