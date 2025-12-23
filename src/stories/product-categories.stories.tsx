import type { Meta, StoryObj } from '@storybook/react';

import ProductCategories1 from '@/components/blocks/product-categories/product-categories1';
import ProductCategories2 from '@/components/blocks/product-categories/product-categories2';
import ProductCategories3 from '@/components/blocks/product-categories/product-categories3';
import ProductCategories4 from '@/components/blocks/product-categories/product-categories4';
import ProductCategories5 from '@/components/blocks/product-categories/product-categories5';

const meta: Meta = {
  title: 'Blocks/Product Categories',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const ProductCategories1: StoryObj = {
  name: 'Product Categories1',
  render: () => <ProductCategories1 />,
};

export const ProductCategories2: StoryObj = {
  name: 'Product Categories2',
  render: () => <ProductCategories2 />,
};

export const ProductCategories3: StoryObj = {
  name: 'Product Categories3',
  render: () => <ProductCategories3 />,
};

export const ProductCategories4: StoryObj = {
  name: 'Product Categories4',
  render: () => <ProductCategories4 />,
};

export const ProductCategories5: StoryObj = {
  name: 'Product Categories5',
  render: () => <ProductCategories5 />,
};

