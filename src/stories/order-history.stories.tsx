import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/order-history/order-history1';
import Component1 from '@/components/blocks/order-history/order-history2';
import Component2 from '@/components/blocks/order-history/order-history3';
import Component3 from '@/components/blocks/order-history/order-history4';
import Component4 from '@/components/blocks/order-history/order-history5';

const meta: Meta = {
  title: 'Blocks/Order History',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryOrderHistory1: StoryObj = {
  name: 'order history 1',
  render: () => <Component0 />,
};

export const StoryOrderHistory2: StoryObj = {
  name: 'order history 2',
  render: () => <Component1 />,
};

export const StoryOrderHistory3: StoryObj = {
  name: 'order history 3',
  render: () => <Component2 />,
};

export const StoryOrderHistory4: StoryObj = {
  name: 'order history 4',
  render: () => <Component3 />,
};

export const StoryOrderHistory5: StoryObj = {
  name: 'order history 5',
  render: () => <Component4 />,
};

