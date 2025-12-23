import type { Meta, StoryObj } from '@storybook/react';

import PaymentMethods1 from '@/components/blocks/payment-methods/payment-methods1';
import PaymentMethods2 from '@/components/blocks/payment-methods/payment-methods2';
import PaymentMethods3 from '@/components/blocks/payment-methods/payment-methods3';
import PaymentMethods4 from '@/components/blocks/payment-methods/payment-methods4';

const meta: Meta = {
  title: 'Blocks/Payment Methods',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const PaymentMethods1: StoryObj = {
  name: 'Payment Methods1',
  render: () => <PaymentMethods1 />,
};

export const PaymentMethods2: StoryObj = {
  name: 'Payment Methods2',
  render: () => <PaymentMethods2 />,
};

export const PaymentMethods3: StoryObj = {
  name: 'Payment Methods3',
  render: () => <PaymentMethods3 />,
};

export const PaymentMethods4: StoryObj = {
  name: 'Payment Methods4',
  render: () => <PaymentMethods4 />,
};

