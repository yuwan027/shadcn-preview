import type { Meta, StoryObj } from '@storybook/react';

import Casestudies1 from '@/components/blocks/casestudies/casestudies1';
import Casestudies4 from '@/components/blocks/casestudies/casestudies4';
import Casestudies5 from '@/components/blocks/casestudies/casestudies5';

const meta: Meta = {
  title: 'Blocks/Casestudies',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Casestudies1: StoryObj = {
  name: 'Casestudies1',
  render: () => <Casestudies1 />,
};

export const Casestudies4: StoryObj = {
  name: 'Casestudies4',
  render: () => <Casestudies4 />,
};

export const Casestudies5: StoryObj = {
  name: 'Casestudies5',
  render: () => <Casestudies5 />,
};

