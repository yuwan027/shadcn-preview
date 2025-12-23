import type { Meta, StoryObj } from '@storybook/react';

import Compare1 from '@/components/blocks/compare/compare1';
import Compare10 from '@/components/blocks/compare/compare10';
import Compare2 from '@/components/blocks/compare/compare2';
import Compare3 from '@/components/blocks/compare/compare3';
import Compare4 from '@/components/blocks/compare/compare4';
import Compare5 from '@/components/blocks/compare/compare5';
import Compare6 from '@/components/blocks/compare/compare6';
import Compare9 from '@/components/blocks/compare/compare9';

const meta: Meta = {
  title: 'Blocks/Compare',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Compare1: StoryObj = {
  name: 'Compare1',
  render: () => <Compare1 />,
};

export const Compare10: StoryObj = {
  name: 'Compare10',
  render: () => <Compare10 />,
};

export const Compare2: StoryObj = {
  name: 'Compare2',
  render: () => <Compare2 />,
};

export const Compare3: StoryObj = {
  name: 'Compare3',
  render: () => <Compare3 />,
};

export const Compare4: StoryObj = {
  name: 'Compare4',
  render: () => <Compare4 />,
};

export const Compare5: StoryObj = {
  name: 'Compare5',
  render: () => <Compare5 />,
};

export const Compare6: StoryObj = {
  name: 'Compare6',
  render: () => <Compare6 />,
};

export const Compare9: StoryObj = {
  name: 'Compare9',
  render: () => <Compare9 />,
};

