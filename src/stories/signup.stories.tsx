import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/signup/signup10';
import Component1 from '@/components/blocks/signup/signup3';
import Component2 from '@/components/blocks/signup/signup4';
import Component3 from '@/components/blocks/signup/signup5';
import Component4 from '@/components/blocks/signup/signup6';
import Component5 from '@/components/blocks/signup/signup7';
import Component6 from '@/components/blocks/signup/signup8';
import Component7 from '@/components/blocks/signup/signup9';

const meta: Meta = {
  title: 'Blocks/Signup',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StorySignup10: StoryObj = {
  name: 'signup 10',
  render: () => <Component0 />,
};

export const StorySignup3: StoryObj = {
  name: 'signup 3',
  render: () => <Component1 />,
};

export const StorySignup4: StoryObj = {
  name: 'signup 4',
  render: () => <Component2 />,
};

export const StorySignup5: StoryObj = {
  name: 'signup 5',
  render: () => <Component3 />,
};

export const StorySignup6: StoryObj = {
  name: 'signup 6',
  render: () => <Component4 />,
};

export const StorySignup7: StoryObj = {
  name: 'signup 7',
  render: () => <Component5 />,
};

export const StorySignup8: StoryObj = {
  name: 'signup 8',
  render: () => <Component6 />,
};

export const StorySignup9: StoryObj = {
  name: 'signup 9',
  render: () => <Component7 />,
};

