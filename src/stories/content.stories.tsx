import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/content/content2';
import Component1 from '@/components/blocks/content/content3';
import Component2 from '@/components/blocks/content/content4';

const meta: Meta = {
  title: 'Blocks/Content',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryContent2: StoryObj = {
  name: 'content 2',
  render: () => <Component0 />,
};

export const StoryContent3: StoryObj = {
  name: 'content 3',
  render: () => <Component1 />,
};

export const StoryContent4: StoryObj = {
  name: 'content 4',
  render: () => <Component2 />,
};

