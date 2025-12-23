import type { Meta, StoryObj } from '@storybook/react';

import Experience2 from '@/components/blocks/experience/experience2';
import Experience3 from '@/components/blocks/experience/experience3';

const meta: Meta = {
  title: 'Blocks/Experience',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Experience2: StoryObj = {
  name: 'Experience2',
  render: () => <Experience2 />,
};

export const Experience3: StoryObj = {
  name: 'Experience3',
  render: () => <Experience3 />,
};

