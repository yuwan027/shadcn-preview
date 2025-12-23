import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/bookademo/bookademo3';

const meta: Meta = {
  title: 'Blocks/Bookademo',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryBookademo3: StoryObj = {
  name: 'bookademo 3',
  render: () => <Component0 />,
};

