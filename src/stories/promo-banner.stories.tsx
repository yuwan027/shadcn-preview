import type { Meta, StoryObj } from '@storybook/react';

import PromoBanner1 from '@/components/blocks/promo-banner/promo-banner1';
import PromoBanner2 from '@/components/blocks/promo-banner/promo-banner2';
import PromoBanner3 from '@/components/blocks/promo-banner/promo-banner3';
import PromoBanner4 from '@/components/blocks/promo-banner/promo-banner4';
import PromoBanner5 from '@/components/blocks/promo-banner/promo-banner5';
import PromoBanner6 from '@/components/blocks/promo-banner/promo-banner6';
import PromoBanner7 from '@/components/blocks/promo-banner/promo-banner7';

const meta: Meta = {
  title: 'Blocks/Promo Banner',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const PromoBanner1: StoryObj = {
  name: 'Promo Banner1',
  render: () => <PromoBanner1 />,
};

export const PromoBanner2: StoryObj = {
  name: 'Promo Banner2',
  render: () => <PromoBanner2 />,
};

export const PromoBanner3: StoryObj = {
  name: 'Promo Banner3',
  render: () => <PromoBanner3 />,
};

export const PromoBanner4: StoryObj = {
  name: 'Promo Banner4',
  render: () => <PromoBanner4 />,
};

export const PromoBanner5: StoryObj = {
  name: 'Promo Banner5',
  render: () => <PromoBanner5 />,
};

export const PromoBanner6: StoryObj = {
  name: 'Promo Banner6',
  render: () => <PromoBanner6 />,
};

export const PromoBanner7: StoryObj = {
  name: 'Promo Banner7',
  render: () => <PromoBanner7 />,
};

