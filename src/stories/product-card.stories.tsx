import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/product-card/product-card1';
import Component1 from '@/components/blocks/product-card/product-card10';
import Component2 from '@/components/blocks/product-card/product-card2';
import Component3 from '@/components/blocks/product-card/product-card3';
import Component4 from '@/components/blocks/product-card/product-card4';
import Component5 from '@/components/blocks/product-card/product-card5';
import Component6 from '@/components/blocks/product-card/product-card6';
import Component7 from '@/components/blocks/product-card/product-card7';
import Component8 from '@/components/blocks/product-card/product-card8';
import Component9 from '@/components/blocks/product-card/product-card9';

const meta: Meta = {
  title: 'Blocks/Product Card',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryProductCard1: StoryObj = {
  name: 'product card 1',
  render: () => <Component0 />,
};

export const StoryProductCard10: StoryObj = {
  name: 'product card 10',
  render: () => <Component1 />,
};

export const StoryProductCard2: StoryObj = {
  name: 'product card 2',
  render: () => <Component2 />,
};

export const StoryProductCard3: StoryObj = {
  name: 'product card 3',
  render: () => <Component3 />,
};

export const StoryProductCard4: StoryObj = {
  name: 'product card 4',
  render: () => <Component4 />,
};

export const StoryProductCard5: StoryObj = {
  name: 'product card 5',
  render: () => <Component5 />,
};

export const StoryProductCard6: StoryObj = {
  name: 'product card 6',
  render: () => <Component6 />,
};

export const StoryProductCard7: StoryObj = {
  name: 'product card 7',
  render: () => <Component7 />,
};

export const StoryProductCard8: StoryObj = {
  name: 'product card 8',
  render: () => <Component8 />,
};

export const StoryProductCard9: StoryObj = {
  name: 'product card 9',
  render: () => <Component9 />,
};

