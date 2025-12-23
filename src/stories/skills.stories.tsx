import type { Meta, StoryObj } from '@storybook/react';

import Skills1 from '@/components/blocks/skills/skills1';
import Skills2 from '@/components/blocks/skills/skills2';

const meta: Meta = {
  title: 'Blocks/Skills',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Skills1: StoryObj = {
  name: 'Skills1',
  render: () => <Skills1 />,
};

export const Skills2: StoryObj = {
  name: 'Skills2',
  render: () => <Skills2 />,
};

