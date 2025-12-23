import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/payment-methods/payment-methods1';
import Component1 from '@/components/blocks/payment-methods/payment-methods2';
import Component2 from '@/components/blocks/payment-methods/payment-methods3';
import Component3 from '@/components/blocks/payment-methods/payment-methods4';

const meta: Meta = {
  title: 'Blocks/Payment Methods',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryPaymentMethods1: StoryObj = {
  name: 'payment methods 1',
  render: () => <Component0 />,
};

export const StoryPaymentMethods2: StoryObj = {
  name: 'payment methods 2',
  render: () => <Component1 />,
};

export const StoryPaymentMethods3: StoryObj = {
  name: 'payment methods 3',
  render: () => <Component2 />,
};

export const StoryPaymentMethods4: StoryObj = {
  name: 'payment methods 4',
  render: () => <Component3 />,
};

