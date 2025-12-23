import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/blogpost/blogpost3';
import Component1 from '@/components/blocks/blogpost/blogpost4';
import Component2 from '@/components/blocks/blogpost/blogpost5';
import Component3 from '@/components/blocks/blogpost/blogpost6';
import Component4 from '@/components/blocks/blogpost/blogpost7';

const meta: Meta = {
  title: 'Blocks/Blogpost',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryBlogpost3: StoryObj = {
  name: 'blogpost 3',
  render: () => <Component0 />,
};

export const StoryBlogpost4: StoryObj = {
  name: 'blogpost 4',
  render: () => <Component1 />,
};

export const StoryBlogpost5: StoryObj = {
  name: 'blogpost 5',
  render: () => <Component2 />,
};

export const StoryBlogpost6: StoryObj = {
  name: 'blogpost 6',
  render: () => <Component3 />,
};

export const StoryBlogpost7: StoryObj = {
  name: 'blogpost 7',
  render: () => <Component4 />,
};

