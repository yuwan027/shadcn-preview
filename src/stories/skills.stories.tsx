import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/skills/skills1';
import Component1 from '@/components/blocks/skills/skills2';

const meta: Meta = {
  title: 'Blocks/Skills',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StorySkills1: StoryObj = {
  name: 'skills 1',
  render: () => <Component0 />,
};

export const StorySkills2: StoryObj = {
  name: 'skills 2',
  render: () => <Component1 />,
};

