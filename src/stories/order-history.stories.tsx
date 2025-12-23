import type { Meta, StoryObj } from '@storybook/react';

import OrderHistory1 from '@/components/blocks/order-history/order-history1';
import OrderHistory2 from '@/components/blocks/order-history/order-history2';
import OrderHistory3 from '@/components/blocks/order-history/order-history3';
import OrderHistory4 from '@/components/blocks/order-history/order-history4';
import OrderHistory5 from '@/components/blocks/order-history/order-history5';

const meta: Meta = {
  title: 'Blocks/Order History',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const OrderHistory1: StoryObj = {
  name: 'Order History1',
  render: () => <OrderHistory1 />,
};

export const OrderHistory2: StoryObj = {
  name: 'Order History2',
  render: () => <OrderHistory2 />,
};

export const OrderHistory3: StoryObj = {
  name: 'Order History3',
  render: () => <OrderHistory3 />,
};

export const OrderHistory4: StoryObj = {
  name: 'Order History4',
  render: () => <OrderHistory4 />,
};

export const OrderHistory5: StoryObj = {
  name: 'Order History5',
  render: () => <OrderHistory5 />,
};

