import type { Meta, StoryObj } from '@storybook/react';

import Resource3 from '@/components/blocks/resource/resource3';

const meta: Meta = {
  title: 'Blocks/Resource',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Resource3: StoryObj = {
  name: 'Resource3',
  render: () => <Resource3 />,
};

