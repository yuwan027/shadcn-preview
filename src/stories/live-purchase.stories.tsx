import type { Meta, StoryObj } from '@storybook/react';

import LivePurchase1 from '@/components/blocks/live-purchase/live-purchase1';
import LivePurchase2 from '@/components/blocks/live-purchase/live-purchase2';
import LivePurchase3 from '@/components/blocks/live-purchase/live-purchase3';

const meta: Meta = {
  title: 'Blocks/Live Purchase',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const LivePurchase1: StoryObj = {
  name: 'Live Purchase1',
  render: () => <LivePurchase1 />,
};

export const LivePurchase2: StoryObj = {
  name: 'Live Purchase2',
  render: () => <LivePurchase2 />,
};

export const LivePurchase3: StoryObj = {
  name: 'Live Purchase3',
  render: () => <LivePurchase3 />,
};

