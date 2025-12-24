import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/industries/industries3';
import Component1 from '@/components/blocks/industries/industries4';
import Component2 from '@/components/blocks/industries/industries1';
import Component3 from '@/components/blocks/industries/industries2';

const meta: Meta = {
  title: 'Blocks/Industries',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryIndustries3: StoryObj = {
  name: 'industries 3',
  render: () => <Component0 />,
};

export const StoryIndustries4: StoryObj = {
  name: 'industries 4',
  render: () => <Component1 />,
};

export const StoryIndustries1: StoryObj = {
  name: 'industries 1',
  render: () => <Component2 />,
};

export const StoryIndustries2: StoryObj = {
  name: 'industries 2',
  render: () => <Component3 />,
};
