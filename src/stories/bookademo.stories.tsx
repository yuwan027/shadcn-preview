import type { Meta, StoryObj } from '@storybook/react';

import Bookademo3 from '@/components/blocks/bookademo/bookademo3';

const meta: Meta = {
  title: 'Blocks/Bookademo',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Bookademo3: StoryObj = {
  name: 'Bookademo3',
  render: () => <Bookademo3 />,
};

