import type { Meta, StoryObj } from '@storybook/react';

import ProductCard1 from '@/components/blocks/product-card/product-card1';
import ProductCard10 from '@/components/blocks/product-card/product-card10';
import ProductCard2 from '@/components/blocks/product-card/product-card2';
import ProductCard3 from '@/components/blocks/product-card/product-card3';
import ProductCard4 from '@/components/blocks/product-card/product-card4';
import ProductCard5 from '@/components/blocks/product-card/product-card5';
import ProductCard6 from '@/components/blocks/product-card/product-card6';
import ProductCard7 from '@/components/blocks/product-card/product-card7';
import ProductCard8 from '@/components/blocks/product-card/product-card8';
import ProductCard9 from '@/components/blocks/product-card/product-card9';

const meta: Meta = {
  title: 'Blocks/Product Card',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const ProductCard1: StoryObj = {
  name: 'Product Card1',
  render: () => <ProductCard1 />,
};

export const ProductCard10: StoryObj = {
  name: 'Product Card10',
  render: () => <ProductCard10 />,
};

export const ProductCard2: StoryObj = {
  name: 'Product Card2',
  render: () => <ProductCard2 />,
};

export const ProductCard3: StoryObj = {
  name: 'Product Card3',
  render: () => <ProductCard3 />,
};

export const ProductCard4: StoryObj = {
  name: 'Product Card4',
  render: () => <ProductCard4 />,
};

export const ProductCard5: StoryObj = {
  name: 'Product Card5',
  render: () => <ProductCard5 />,
};

export const ProductCard6: StoryObj = {
  name: 'Product Card6',
  render: () => <ProductCard6 />,
};

export const ProductCard7: StoryObj = {
  name: 'Product Card7',
  render: () => <ProductCard7 />,
};

export const ProductCard8: StoryObj = {
  name: 'Product Card8',
  render: () => <ProductCard8 />,
};

export const ProductCard9: StoryObj = {
  name: 'Product Card9',
  render: () => <ProductCard9 />,
};

