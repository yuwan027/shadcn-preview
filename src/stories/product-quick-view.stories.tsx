import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/product-quick-view/product-quick-view4';
import Component1 from '@/components/blocks/product-quick-view/product-quick-view5';
import Component2 from '@/components/blocks/product-quick-view/product-quick-view6';
import Component3 from '@/components/blocks/product-quick-view/product-quick-view7';

const meta: Meta = {
  title: 'Blocks/Product Quick View',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryProductQuickView4: StoryObj = {
  name: 'product quick view 4',
  render: () => <Component0 />,
};

export const StoryProductQuickView5: StoryObj = {
  name: 'product quick view 5',
  render: () => <Component1 />,
};

export const StoryProductQuickView6: StoryObj = {
  name: 'product quick view 6',
  render: () => <Component2 />,
};

export const StoryProductQuickView7: StoryObj = {
  name: 'product quick view 7',
  render: () => <Component3 />,
};

