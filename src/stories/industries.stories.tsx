import type { Meta, StoryObj } from '@storybook/react';

import Industries3 from '@/components/blocks/industries/industries3';
import Industries4 from '@/components/blocks/industries/industries4';

const meta: Meta = {
  title: 'Blocks/Industries',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Industries3: StoryObj = {
  name: 'Industries3',
  render: () => <Industries3 />,
};

export const Industries4: StoryObj = {
  name: 'Industries4',
  render: () => <Industries4 />,
};

