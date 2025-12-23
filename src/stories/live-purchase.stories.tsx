import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/live-purchase/live-purchase1';
import Component1 from '@/components/blocks/live-purchase/live-purchase2';
import Component2 from '@/components/blocks/live-purchase/live-purchase3';

const meta: Meta = {
  title: 'Blocks/Live Purchase',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryLivePurchase1: StoryObj = {
  name: 'live purchase 1',
  render: () => <Component0 />,
};

export const StoryLivePurchase2: StoryObj = {
  name: 'live purchase 2',
  render: () => <Component1 />,
};

export const StoryLivePurchase3: StoryObj = {
  name: 'live purchase 3',
  render: () => <Component2 />,
};

