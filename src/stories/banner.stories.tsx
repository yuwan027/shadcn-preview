import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/banner/banner3';
import Component1 from '@/components/blocks/banner/banner4';
import Component2 from '@/components/blocks/banner/banner5';
import Component3 from '@/components/blocks/banner/banner6';
import Component4 from '@/components/blocks/banner/banner7';

const meta: Meta = {
  title: 'Blocks/Banner',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryBanner3: StoryObj = {
  name: 'banner 3',
  render: () => <Component0 />,
};

export const StoryBanner4: StoryObj = {
  name: 'banner 4',
  render: () => <Component1 />,
};

export const StoryBanner5: StoryObj = {
  name: 'banner 5',
  render: () => <Component2 />,
};

export const StoryBanner6: StoryObj = {
  name: 'banner 6',
  render: () => <Component3 />,
};

export const StoryBanner7: StoryObj = {
  name: 'banner 7',
  render: () => <Component4 />,
};

