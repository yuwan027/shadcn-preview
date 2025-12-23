import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/resources/resources1';
import Component1 from '@/components/blocks/resources/resources2';
import Component2 from '@/components/blocks/resources/resources3';
import Component3 from '@/components/blocks/resources/resources4';
import Component4 from '@/components/blocks/resources/resources5';

const meta: Meta = {
  title: 'Blocks/Resources',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryResources1: StoryObj = {
  name: 'resources 1',
  render: () => <Component0 />,
};

export const StoryResources2: StoryObj = {
  name: 'resources 2',
  render: () => <Component1 />,
};

export const StoryResources3: StoryObj = {
  name: 'resources 3',
  render: () => <Component2 />,
};

export const StoryResources4: StoryObj = {
  name: 'resources 4',
  render: () => <Component3 />,
};

export const StoryResources5: StoryObj = {
  name: 'resources 5',
  render: () => <Component4 />,
};

