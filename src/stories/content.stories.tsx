import type { Meta, StoryObj } from '@storybook/react';

import Content2 from '@/components/blocks/content/content2';
import Content3 from '@/components/blocks/content/content3';
import Content4 from '@/components/blocks/content/content4';

const meta: Meta = {
  title: 'Blocks/Content',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Content2: StoryObj = {
  name: 'Content2',
  render: () => <Content2 />,
};

export const Content3: StoryObj = {
  name: 'Content3',
  render: () => <Content3 />,
};

export const Content4: StoryObj = {
  name: 'Content4',
  render: () => <Content4 />,
};

