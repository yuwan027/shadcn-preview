import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/trust-strip/trust-strip1';
import Component1 from '@/components/blocks/trust-strip/trust-strip2';
import Component2 from '@/components/blocks/trust-strip/trust-strip3';
import Component3 from '@/components/blocks/trust-strip/trust-strip4';

const meta: Meta = {
  title: 'Blocks/Trust Strip',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryTrustStrip1: StoryObj = {
  name: 'trust strip 1',
  render: () => <Component0 />,
};

export const StoryTrustStrip2: StoryObj = {
  name: 'trust strip 2',
  render: () => <Component1 />,
};

export const StoryTrustStrip3: StoryObj = {
  name: 'trust strip 3',
  render: () => <Component2 />,
};

export const StoryTrustStrip4: StoryObj = {
  name: 'trust strip 4',
  render: () => <Component3 />,
};

