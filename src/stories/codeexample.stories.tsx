import type { Meta, StoryObj } from '@storybook/react';

import Codeexample2 from '@/components/blocks/codeexample/codeexample2';
import Codeexample3 from '@/components/blocks/codeexample/codeexample3';
import Codeexample4 from '@/components/blocks/codeexample/codeexample4';
import Codeexample5 from '@/components/blocks/codeexample/codeexample5';

const meta: Meta = {
  title: 'Blocks/Codeexample',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Codeexample2: StoryObj = {
  name: 'Codeexample2',
  render: () => <Codeexample2 />,
};

export const Codeexample3: StoryObj = {
  name: 'Codeexample3',
  render: () => <Codeexample3 />,
};

export const Codeexample4: StoryObj = {
  name: 'Codeexample4',
  render: () => <Codeexample4 />,
};

export const Codeexample5: StoryObj = {
  name: 'Codeexample5',
  render: () => <Codeexample5 />,
};

