import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/resource/resource3';
import Component1 from '@/components/blocks/resource/resource2';

const meta: Meta = {
  title: 'Blocks/Resource',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryResource3: StoryObj = {
  name: 'resource 3',
  render: () => <Component0 />,
};

export const StoryResource2: StoryObj = {
  name: 'resource 2',
  render: () => <Component1 />,
};
