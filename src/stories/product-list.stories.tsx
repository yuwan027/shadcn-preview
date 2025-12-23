import type { Meta, StoryObj } from '@storybook/react';

import ProductList1 from '@/components/blocks/product-list/product-list1';
import ProductList10 from '@/components/blocks/product-list/product-list10';
import ProductList2 from '@/components/blocks/product-list/product-list2';
import ProductList3 from '@/components/blocks/product-list/product-list3';
import ProductList4 from '@/components/blocks/product-list/product-list4';
import ProductList5 from '@/components/blocks/product-list/product-list5';
import ProductList6 from '@/components/blocks/product-list/product-list6';
import ProductList7 from '@/components/blocks/product-list/product-list7';
import ProductList8 from '@/components/blocks/product-list/product-list8';
import ProductList9 from '@/components/blocks/product-list/product-list9';

const meta: Meta = {
  title: 'Blocks/Product List',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const ProductList1: StoryObj = {
  name: 'Product List1',
  render: () => <ProductList1 />,
};

export const ProductList10: StoryObj = {
  name: 'Product List10',
  render: () => <ProductList10 />,
};

export const ProductList2: StoryObj = {
  name: 'Product List2',
  render: () => <ProductList2 />,
};

export const ProductList3: StoryObj = {
  name: 'Product List3',
  render: () => <ProductList3 />,
};

export const ProductList4: StoryObj = {
  name: 'Product List4',
  render: () => <ProductList4 />,
};

export const ProductList5: StoryObj = {
  name: 'Product List5',
  render: () => <ProductList5 />,
};

export const ProductList6: StoryObj = {
  name: 'Product List6',
  render: () => <ProductList6 />,
};

export const ProductList7: StoryObj = {
  name: 'Product List7',
  render: () => <ProductList7 />,
};

export const ProductList8: StoryObj = {
  name: 'Product List8',
  render: () => <ProductList8 />,
};

export const ProductList9: StoryObj = {
  name: 'Product List9',
  render: () => <ProductList9 />,
};

