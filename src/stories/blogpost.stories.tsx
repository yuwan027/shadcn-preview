import type { Meta, StoryObj } from '@storybook/react';

import Blogpost3 from '@/components/blocks/blogpost/blogpost3';
import Blogpost4 from '@/components/blocks/blogpost/blogpost4';
import Blogpost5 from '@/components/blocks/blogpost/blogpost5';
import Blogpost6 from '@/components/blocks/blogpost/blogpost6';
import Blogpost7 from '@/components/blocks/blogpost/blogpost7';

const meta: Meta = {
  title: 'Blocks/Blogpost',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Blogpost3: StoryObj = {
  name: 'Blogpost3',
  render: () => <Blogpost3 />,
};

export const Blogpost4: StoryObj = {
  name: 'Blogpost4',
  render: () => <Blogpost4 />,
};

export const Blogpost5: StoryObj = {
  name: 'Blogpost5',
  render: () => <Blogpost5 />,
};

export const Blogpost6: StoryObj = {
  name: 'Blogpost6',
  render: () => <Blogpost6 />,
};

export const Blogpost7: StoryObj = {
  name: 'Blogpost7',
  render: () => <Blogpost7 />,
};

