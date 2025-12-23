import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/industries/industries3';
import Component1 from '@/components/blocks/industries/industries4';

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

