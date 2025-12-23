import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/codeexample/codeexample2';
import Component1 from '@/components/blocks/codeexample/codeexample3';
import Component2 from '@/components/blocks/codeexample/codeexample4';
import Component3 from '@/components/blocks/codeexample/codeexample5';

const meta: Meta = {
  title: 'Blocks/Codeexample',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryCodeexample2: StoryObj = {
  name: 'codeexample 2',
  render: () => <Component0 />,
};

export const StoryCodeexample3: StoryObj = {
  name: 'codeexample 3',
  render: () => <Component1 />,
};

export const StoryCodeexample4: StoryObj = {
  name: 'codeexample 4',
  render: () => <Component2 />,
};

export const StoryCodeexample5: StoryObj = {
  name: 'codeexample 5',
  render: () => <Component3 />,
};

