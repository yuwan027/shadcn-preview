import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/resource/resource3';

const meta: Meta = {
  title: 'Blocks/Resource',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryResource3: StoryObj = {
  name: 'resource 3',
  render: () => <Component0 />,
};

