import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/ratecard/ratecard1';

const meta: Meta = {
  title: 'Blocks/Ratecard',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryRatecard1: StoryObj = {
  name: 'ratecard 1',
  render: () => <Component0 />,
};

