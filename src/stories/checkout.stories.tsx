import type { Meta, StoryObj } from '@storybook/react';

import Checkout1 from '@/components/blocks/checkout/checkout1';
import Checkout2 from '@/components/blocks/checkout/checkout2';
import Checkout3 from '@/components/blocks/checkout/checkout3';
import Checkout4 from '@/components/blocks/checkout/checkout4';
import Checkout5 from '@/components/blocks/checkout/checkout5';
import Checkout8 from '@/components/blocks/checkout/checkout8';

const meta: Meta = {
  title: 'Blocks/Checkout',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Checkout1: StoryObj = {
  name: 'Checkout1',
  render: () => <Checkout1 />,
};

export const Checkout2: StoryObj = {
  name: 'Checkout2',
  render: () => <Checkout2 />,
};

export const Checkout3: StoryObj = {
  name: 'Checkout3',
  render: () => <Checkout3 />,
};

export const Checkout4: StoryObj = {
  name: 'Checkout4',
  render: () => <Checkout4 />,
};

export const Checkout5: StoryObj = {
  name: 'Checkout5',
  render: () => <Checkout5 />,
};

export const Checkout8: StoryObj = {
  name: 'Checkout8',
  render: () => <Checkout8 />,
};

