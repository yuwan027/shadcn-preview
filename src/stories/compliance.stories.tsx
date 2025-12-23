import type { Meta, StoryObj } from '@storybook/react';

import Compliance5 from '@/components/blocks/compliance/compliance5';
import Compliance6 from '@/components/blocks/compliance/compliance6';
import Compliance7 from '@/components/blocks/compliance/compliance7';

const meta: Meta = {
  title: 'Blocks/Compliance',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Compliance5: StoryObj = {
  name: 'Compliance5',
  render: () => <Compliance5 />,
};

export const Compliance6: StoryObj = {
  name: 'Compliance6',
  render: () => <Compliance6 />,
};

export const Compliance7: StoryObj = {
  name: 'Compliance7',
  render: () => <Compliance7 />,
};

