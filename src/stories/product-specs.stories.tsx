import type { Meta, StoryObj } from '@storybook/react';

import ProductSpecs1 from '@/components/blocks/product-specs/product-specs1';
import ProductSpecs2 from '@/components/blocks/product-specs/product-specs2';

const meta: Meta = {
  title: 'Blocks/Product Specs',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const ProductSpecs1: StoryObj = {
  name: 'Product Specs1',
  render: () => <ProductSpecs1 />,
};

export const ProductSpecs2: StoryObj = {
  name: 'Product Specs2',
  render: () => <ProductSpecs2 />,
};

