import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/experience/experience2';
import Component1 from '@/components/blocks/experience/experience3';

const meta: Meta = {
  title: 'Blocks/Experience',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryExperience2: StoryObj = {
  name: 'experience 2',
  render: () => <Component0 />,
};

export const StoryExperience3: StoryObj = {
  name: 'experience 3',
  render: () => <Component1 />,
};

