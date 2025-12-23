import type { Meta, StoryObj } from '@storybook/react';

import TrustStrip1 from '@/components/blocks/trust-strip/trust-strip1';
import TrustStrip2 from '@/components/blocks/trust-strip/trust-strip2';
import TrustStrip3 from '@/components/blocks/trust-strip/trust-strip3';
import TrustStrip4 from '@/components/blocks/trust-strip/trust-strip4';

const meta: Meta = {
  title: 'Blocks/Trust Strip',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const TrustStrip1: StoryObj = {
  name: 'Trust Strip1',
  render: () => <TrustStrip1 />,
};

export const TrustStrip2: StoryObj = {
  name: 'Trust Strip2',
  render: () => <TrustStrip2 />,
};

export const TrustStrip3: StoryObj = {
  name: 'Trust Strip3',
  render: () => <TrustStrip3 />,
};

export const TrustStrip4: StoryObj = {
  name: 'Trust Strip4',
  render: () => <TrustStrip4 />,
};

