import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/product-list/product-list1';
import Component1 from '@/components/blocks/product-list/product-list10';
import Component2 from '@/components/blocks/product-list/product-list2';
import Component3 from '@/components/blocks/product-list/product-list3';
import Component4 from '@/components/blocks/product-list/product-list4';
import Component5 from '@/components/blocks/product-list/product-list5';
import Component6 from '@/components/blocks/product-list/product-list6';
import Component7 from '@/components/blocks/product-list/product-list7';
import Component8 from '@/components/blocks/product-list/product-list8';
import Component9 from '@/components/blocks/product-list/product-list9';

const meta: Meta = {
  title: 'Blocks/Product List',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryProductList1: StoryObj = {
  name: 'product list 1',
  render: () => <Component0 />,
};

export const StoryProductList10: StoryObj = {
  name: 'product list 10',
  render: () => <Component1 />,
};

export const StoryProductList2: StoryObj = {
  name: 'product list 2',
  render: () => <Component2 />,
};

export const StoryProductList3: StoryObj = {
  name: 'product list 3',
  render: () => <Component3 />,
};

export const StoryProductList4: StoryObj = {
  name: 'product list 4',
  render: () => <Component4 />,
};

export const StoryProductList5: StoryObj = {
  name: 'product list 5',
  render: () => <Component5 />,
};

export const StoryProductList6: StoryObj = {
  name: 'product list 6',
  render: () => <Component6 />,
};

export const StoryProductList7: StoryObj = {
  name: 'product list 7',
  render: () => <Component7 />,
};

export const StoryProductList8: StoryObj = {
  name: 'product list 8',
  render: () => <Component8 />,
};

export const StoryProductList9: StoryObj = {
  name: 'product list 9',
  render: () => <Component9 />,
};

