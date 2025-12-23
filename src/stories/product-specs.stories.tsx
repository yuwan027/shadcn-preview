import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/product-specs/product-specs1';
import Component1 from '@/components/blocks/product-specs/product-specs2';

const meta: Meta = {
  title: 'Blocks/Product Specs',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryProductSpecs1: StoryObj = {
  name: 'product specs 1',
  render: () => <Component0 />,
};

export const StoryProductSpecs2: StoryObj = {
  name: 'product specs 2',
  render: () => <Component1 />,
};

