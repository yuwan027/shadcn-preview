import type { Meta, StoryObj } from '@storybook/react';

import CompareProducts1 from '@/components/blocks/compare-products/compare-products1';
import CompareProducts2 from '@/components/blocks/compare-products/compare-products2';
import CompareProducts3 from '@/components/blocks/compare-products/compare-products3';

const meta: Meta = {
  title: 'Blocks/Compare Products',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const CompareProducts1: StoryObj = {
  name: 'Compare Products1',
  render: () => <CompareProducts1 />,
};

export const CompareProducts2: StoryObj = {
  name: 'Compare Products2',
  render: () => <CompareProducts2 />,
};

export const CompareProducts3: StoryObj = {
  name: 'Compare Products3',
  render: () => <CompareProducts3 />,
};

