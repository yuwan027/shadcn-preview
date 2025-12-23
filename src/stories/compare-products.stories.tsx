import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/compare-products/compare-products1';
import Component1 from '@/components/blocks/compare-products/compare-products2';
import Component2 from '@/components/blocks/compare-products/compare-products3';

const meta: Meta = {
  title: 'Blocks/Compare Products',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryCompareProducts1: StoryObj = {
  name: 'compare products 1',
  render: () => <Component0 />,
};

export const StoryCompareProducts2: StoryObj = {
  name: 'compare products 2',
  render: () => <Component1 />,
};

export const StoryCompareProducts3: StoryObj = {
  name: 'compare products 3',
  render: () => <Component2 />,
};

