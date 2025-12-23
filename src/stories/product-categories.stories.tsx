import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/product-categories/product-categories1';
import Component1 from '@/components/blocks/product-categories/product-categories2';
import Component2 from '@/components/blocks/product-categories/product-categories3';
import Component3 from '@/components/blocks/product-categories/product-categories4';
import Component4 from '@/components/blocks/product-categories/product-categories5';

const meta: Meta = {
  title: 'Blocks/Product Categories',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryProductCategories1: StoryObj = {
  name: 'product categories 1',
  render: () => <Component0 />,
};

export const StoryProductCategories2: StoryObj = {
  name: 'product categories 2',
  render: () => <Component1 />,
};

export const StoryProductCategories3: StoryObj = {
  name: 'product categories 3',
  render: () => <Component2 />,
};

export const StoryProductCategories4: StoryObj = {
  name: 'product categories 4',
  render: () => <Component3 />,
};

export const StoryProductCategories5: StoryObj = {
  name: 'product categories 5',
  render: () => <Component4 />,
};

