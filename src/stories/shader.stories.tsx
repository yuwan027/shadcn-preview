import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/shader/shader1';
import Component1 from '@/components/blocks/shader/shader10';
import Component2 from '@/components/blocks/shader/shader2';
import Component3 from '@/components/blocks/shader/shader3';
import Component4 from '@/components/blocks/shader/shader4';
import Component5 from '@/components/blocks/shader/shader5';
import Component6 from '@/components/blocks/shader/shader6';
import Component7 from '@/components/blocks/shader/shader7';
import Component8 from '@/components/blocks/shader/shader8';
import Component9 from '@/components/blocks/shader/shader9';

const meta: Meta = {
  title: 'Blocks/Shader',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryShader1: StoryObj = {
  name: 'shader 1',
  render: () => <Component0 />,
};

export const StoryShader10: StoryObj = {
  name: 'shader 10',
  render: () => <Component1 />,
};

export const StoryShader2: StoryObj = {
  name: 'shader 2',
  render: () => <Component2 />,
};

export const StoryShader3: StoryObj = {
  name: 'shader 3',
  render: () => <Component3 />,
};

export const StoryShader4: StoryObj = {
  name: 'shader 4',
  render: () => <Component4 />,
};

export const StoryShader5: StoryObj = {
  name: 'shader 5',
  render: () => <Component5 />,
};

export const StoryShader6: StoryObj = {
  name: 'shader 6',
  render: () => <Component6 />,
};

export const StoryShader7: StoryObj = {
  name: 'shader 7',
  render: () => <Component7 />,
};

export const StoryShader8: StoryObj = {
  name: 'shader 8',
  render: () => <Component8 />,
};

export const StoryShader9: StoryObj = {
  name: 'shader 9',
  render: () => <Component9 />,
};

