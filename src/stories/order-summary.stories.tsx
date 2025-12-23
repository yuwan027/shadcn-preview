import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/order-summary/order-summary1';
import Component1 from '@/components/blocks/order-summary/order-summary2';
import Component2 from '@/components/blocks/order-summary/order-summary3';
import Component3 from '@/components/blocks/order-summary/order-summary4';
import Component4 from '@/components/blocks/order-summary/order-summary5';
import Component5 from '@/components/blocks/order-summary/order-summary6';

const meta: Meta = {
  title: 'Blocks/Order Summary',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryOrderSummary1: StoryObj = {
  name: 'order summary 1',
  render: () => <Component0 />,
};

export const StoryOrderSummary2: StoryObj = {
  name: 'order summary 2',
  render: () => <Component1 />,
};

export const StoryOrderSummary3: StoryObj = {
  name: 'order summary 3',
  render: () => <Component2 />,
};

export const StoryOrderSummary4: StoryObj = {
  name: 'order summary 4',
  render: () => <Component3 />,
};

export const StoryOrderSummary5: StoryObj = {
  name: 'order summary 5',
  render: () => <Component4 />,
};

export const StoryOrderSummary6: StoryObj = {
  name: 'order summary 6',
  render: () => <Component5 />,
};

