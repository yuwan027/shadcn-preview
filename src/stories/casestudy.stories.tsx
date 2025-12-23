import type { Meta, StoryObj } from '@storybook/react';

import Casestudy3 from '@/components/blocks/casestudy/casestudy3';

const meta: Meta = {
  title: 'Blocks/Casestudy',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Casestudy3: StoryObj = {
  name: 'Casestudy3',
  render: () => <Casestudy3 />,
};

