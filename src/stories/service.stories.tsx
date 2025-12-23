import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/service/service3';
import Component1 from '@/components/blocks/service/service4';
import Component2 from '@/components/blocks/service/service5';
import Component3 from '@/components/blocks/service/service6';
import Component4 from '@/components/blocks/service/service7';

const meta: Meta = {
  title: 'Blocks/Service',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryService3: StoryObj = {
  name: 'service 3',
  render: () => <Component0 />,
};

export const StoryService4: StoryObj = {
  name: 'service 4',
  render: () => <Component1 />,
};

export const StoryService5: StoryObj = {
  name: 'service 5',
  render: () => <Component2 />,
};

export const StoryService6: StoryObj = {
  name: 'service 6',
  render: () => <Component3 />,
};

export const StoryService7: StoryObj = {
  name: 'service 7',
  render: () => <Component4 />,
};

