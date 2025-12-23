import type { Meta, StoryObj } from '@storybook/react';

import Ratecard1 from '@/components/blocks/ratecard/ratecard1';

const meta: Meta = {
  title: 'Blocks/Ratecard',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Ratecard1: StoryObj = {
  name: 'Ratecard1',
  render: () => <Ratecard1 />,
};

