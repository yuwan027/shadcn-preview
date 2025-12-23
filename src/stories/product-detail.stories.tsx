import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/product-detail/product-detail1';
import Component1 from '@/components/blocks/product-detail/product-detail10';
import Component2 from '@/components/blocks/product-detail/product-detail2';
import Component3 from '@/components/blocks/product-detail/product-detail3';
import Component4 from '@/components/blocks/product-detail/product-detail4';
import Component5 from '@/components/blocks/product-detail/product-detail5';
import Component6 from '@/components/blocks/product-detail/product-detail6';
import Component7 from '@/components/blocks/product-detail/product-detail7';
import Component8 from '@/components/blocks/product-detail/product-detail8';
import Component9 from '@/components/blocks/product-detail/product-detail9';

const meta: Meta = {
  title: 'Blocks/Product Detail',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryProductDetail1: StoryObj = {
  name: 'product detail 1',
  render: () => <Component0 />,
};

export const StoryProductDetail10: StoryObj = {
  name: 'product detail 10',
  render: () => <Component1 />,
};

export const StoryProductDetail2: StoryObj = {
  name: 'product detail 2',
  render: () => <Component2 />,
};

export const StoryProductDetail3: StoryObj = {
  name: 'product detail 3',
  render: () => <Component3 />,
};

export const StoryProductDetail4: StoryObj = {
  name: 'product detail 4',
  render: () => <Component4 />,
};

export const StoryProductDetail5: StoryObj = {
  name: 'product detail 5',
  render: () => <Component5 />,
};

export const StoryProductDetail6: StoryObj = {
  name: 'product detail 6',
  render: () => <Component6 />,
};

export const StoryProductDetail7: StoryObj = {
  name: 'product detail 7',
  render: () => <Component7 />,
};

export const StoryProductDetail8: StoryObj = {
  name: 'product detail 8',
  render: () => <Component8 />,
};

export const StoryProductDetail9: StoryObj = {
  name: 'product detail 9',
  render: () => <Component9 />,
};

