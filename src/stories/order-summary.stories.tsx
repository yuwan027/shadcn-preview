import type { Meta, StoryObj } from '@storybook/react';

import OrderSummary1 from '@/components/blocks/order-summary/order-summary1';
import OrderSummary2 from '@/components/blocks/order-summary/order-summary2';
import OrderSummary3 from '@/components/blocks/order-summary/order-summary3';
import OrderSummary4 from '@/components/blocks/order-summary/order-summary4';
import OrderSummary5 from '@/components/blocks/order-summary/order-summary5';
import OrderSummary6 from '@/components/blocks/order-summary/order-summary6';

const meta: Meta = {
  title: 'Blocks/Order Summary',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const OrderSummary1: StoryObj = {
  name: 'Order Summary1',
  render: () => <OrderSummary1 />,
};

export const OrderSummary2: StoryObj = {
  name: 'Order Summary2',
  render: () => <OrderSummary2 />,
};

export const OrderSummary3: StoryObj = {
  name: 'Order Summary3',
  render: () => <OrderSummary3 />,
};

export const OrderSummary4: StoryObj = {
  name: 'Order Summary4',
  render: () => <OrderSummary4 />,
};

export const OrderSummary5: StoryObj = {
  name: 'Order Summary5',
  render: () => <OrderSummary5 />,
};

export const OrderSummary6: StoryObj = {
  name: 'Order Summary6',
  render: () => <OrderSummary6 />,
};

