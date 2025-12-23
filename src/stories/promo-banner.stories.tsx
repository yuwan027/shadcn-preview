import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/promo-banner/promo-banner1';
import Component1 from '@/components/blocks/promo-banner/promo-banner2';
import Component2 from '@/components/blocks/promo-banner/promo-banner3';
import Component3 from '@/components/blocks/promo-banner/promo-banner4';
import Component4 from '@/components/blocks/promo-banner/promo-banner5';
import Component5 from '@/components/blocks/promo-banner/promo-banner6';
import Component6 from '@/components/blocks/promo-banner/promo-banner7';

const meta: Meta = {
  title: 'Blocks/Promo Banner',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryPromoBanner1: StoryObj = {
  name: 'promo banner 1',
  render: () => <Component0 />,
};

export const StoryPromoBanner2: StoryObj = {
  name: 'promo banner 2',
  render: () => <Component1 />,
};

export const StoryPromoBanner3: StoryObj = {
  name: 'promo banner 3',
  render: () => <Component2 />,
};

export const StoryPromoBanner4: StoryObj = {
  name: 'promo banner 4',
  render: () => <Component3 />,
};

export const StoryPromoBanner5: StoryObj = {
  name: 'promo banner 5',
  render: () => <Component4 />,
};

export const StoryPromoBanner6: StoryObj = {
  name: 'promo banner 6',
  render: () => <Component5 />,
};

export const StoryPromoBanner7: StoryObj = {
  name: 'promo banner 7',
  render: () => <Component6 />,
};

