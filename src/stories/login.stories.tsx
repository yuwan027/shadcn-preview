import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/login/login3';
import Component1 from '@/components/blocks/login/login4';
import Component2 from '@/components/blocks/login/login5';
import Component3 from '@/components/blocks/login/login6';
import Component4 from '@/components/blocks/login/login7';
import Component5 from '@/components/blocks/login/login9';

const meta: Meta = {
  title: 'Blocks/Login',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryLogin3: StoryObj = {
  name: 'login 3',
  render: () => <Component0 />,
};

export const StoryLogin4: StoryObj = {
  name: 'login 4',
  render: () => <Component1 />,
};

export const StoryLogin5: StoryObj = {
  name: 'login 5',
  render: () => <Component2 />,
};

export const StoryLogin6: StoryObj = {
  name: 'login 6',
  render: () => <Component3 />,
};

export const StoryLogin7: StoryObj = {
  name: 'login 7',
  render: () => <Component4 />,
};

export const StoryLogin9: StoryObj = {
  name: 'login 9',
  render: () => <Component5 />,
};

