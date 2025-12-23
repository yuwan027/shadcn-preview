import type { Meta, StoryObj } from '@storybook/react';

import ProductQuickView4 from '@/components/blocks/product-quick-view/product-quick-view4';
import ProductQuickView5 from '@/components/blocks/product-quick-view/product-quick-view5';
import ProductQuickView6 from '@/components/blocks/product-quick-view/product-quick-view6';
import ProductQuickView7 from '@/components/blocks/product-quick-view/product-quick-view7';

const meta: Meta = {
  title: 'Blocks/Product Quick View',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const ProductQuickView4: StoryObj = {
  name: 'Product Quick View4',
  render: () => <ProductQuickView4 />,
};

export const ProductQuickView5: StoryObj = {
  name: 'Product Quick View5',
  render: () => <ProductQuickView5 />,
};

export const ProductQuickView6: StoryObj = {
  name: 'Product Quick View6',
  render: () => <ProductQuickView6 />,
};

export const ProductQuickView7: StoryObj = {
  name: 'Product Quick View7',
  render: () => <ProductQuickView7 />,
};

