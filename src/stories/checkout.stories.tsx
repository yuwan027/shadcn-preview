import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/checkout/checkout1';
import Component1 from '@/components/blocks/checkout/checkout2';
import Component2 from '@/components/blocks/checkout/checkout3';
import Component3 from '@/components/blocks/checkout/checkout4';
import Component4 from '@/components/blocks/checkout/checkout5';
import Component5 from '@/components/blocks/checkout/checkout8';

const meta: Meta = {
  title: 'Blocks/Checkout',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryCheckout1: StoryObj = {
  name: 'checkout 1',
  render: () => <Component0 />,
};

export const StoryCheckout2: StoryObj = {
  name: 'checkout 2',
  render: () => <Component1 />,
};

export const StoryCheckout3: StoryObj = {
  name: 'checkout 3',
  render: () => <Component2 />,
};

export const StoryCheckout4: StoryObj = {
  name: 'checkout 4',
  render: () => <Component3 />,
};

export const StoryCheckout5: StoryObj = {
  name: 'checkout 5',
  render: () => <Component4 />,
};

export const StoryCheckout8: StoryObj = {
  name: 'checkout 8',
  render: () => <Component5 />,
};

