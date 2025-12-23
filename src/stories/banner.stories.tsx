import type { Meta, StoryObj } from '@storybook/react';

import Banner3 from '@/components/blocks/banner/banner3';
import Banner4 from '@/components/blocks/banner/banner4';
import Banner5 from '@/components/blocks/banner/banner5';
import Banner6 from '@/components/blocks/banner/banner6';
import Banner7 from '@/components/blocks/banner/banner7';

const meta: Meta = {
  title: 'Blocks/Banner',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Banner3: StoryObj = {
  name: 'Banner3',
  render: () => <Banner3 />,
};

export const Banner4: StoryObj = {
  name: 'Banner4',
  render: () => <Banner4 />,
};

export const Banner5: StoryObj = {
  name: 'Banner5',
  render: () => <Banner5 />,
};

export const Banner6: StoryObj = {
  name: 'Banner6',
  render: () => <Banner6 />,
};

export const Banner7: StoryObj = {
  name: 'Banner7',
  render: () => <Banner7 />,
};

