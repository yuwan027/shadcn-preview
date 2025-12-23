import type { Meta, StoryObj } from '@storybook/react';

import Login3 from '@/components/blocks/login/login3';
import Login4 from '@/components/blocks/login/login4';
import Login5 from '@/components/blocks/login/login5';
import Login6 from '@/components/blocks/login/login6';
import Login7 from '@/components/blocks/login/login7';
import Login9 from '@/components/blocks/login/login9';

const meta: Meta = {
  title: 'Blocks/Login',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Login3: StoryObj = {
  name: 'Login3',
  render: () => <Login3 />,
};

export const Login4: StoryObj = {
  name: 'Login4',
  render: () => <Login4 />,
};

export const Login5: StoryObj = {
  name: 'Login5',
  render: () => <Login5 />,
};

export const Login6: StoryObj = {
  name: 'Login6',
  render: () => <Login6 />,
};

export const Login7: StoryObj = {
  name: 'Login7',
  render: () => <Login7 />,
};

export const Login9: StoryObj = {
  name: 'Login9',
  render: () => <Login9 />,
};

