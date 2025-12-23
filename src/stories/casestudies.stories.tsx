import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/casestudies/casestudies1';
import Component1 from '@/components/blocks/casestudies/casestudies4';
import Component2 from '@/components/blocks/casestudies/casestudies5';

const meta: Meta = {
  title: 'Blocks/Casestudies',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryCasestudies1: StoryObj = {
  name: 'casestudies 1',
  render: () => <Component0 />,
};

export const StoryCasestudies4: StoryObj = {
  name: 'casestudies 4',
  render: () => <Component1 />,
};

export const StoryCasestudies5: StoryObj = {
  name: 'casestudies 5',
  render: () => <Component2 />,
};

