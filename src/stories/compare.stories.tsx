import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/compare/compare1';
import Component1 from '@/components/blocks/compare/compare10';
import Component2 from '@/components/blocks/compare/compare2';
import Component3 from '@/components/blocks/compare/compare3';
import Component4 from '@/components/blocks/compare/compare4';
import Component5 from '@/components/blocks/compare/compare5';
import Component6 from '@/components/blocks/compare/compare6';
import Component7 from '@/components/blocks/compare/compare9';

const meta: Meta = {
  title: 'Blocks/Compare',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryCompare1: StoryObj = {
  name: 'compare 1',
  render: () => <Component0 />,
};

export const StoryCompare10: StoryObj = {
  name: 'compare 10',
  render: () => <Component1 />,
};

export const StoryCompare2: StoryObj = {
  name: 'compare 2',
  render: () => <Component2 />,
};

export const StoryCompare3: StoryObj = {
  name: 'compare 3',
  render: () => <Component3 />,
};

export const StoryCompare4: StoryObj = {
  name: 'compare 4',
  render: () => <Component4 />,
};

export const StoryCompare5: StoryObj = {
  name: 'compare 5',
  render: () => <Component5 />,
};

export const StoryCompare6: StoryObj = {
  name: 'compare 6',
  render: () => <Component6 />,
};

export const StoryCompare9: StoryObj = {
  name: 'compare 9',
  render: () => <Component7 />,
};

