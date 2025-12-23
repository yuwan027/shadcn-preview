import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/reviews/reviews1';
import Component1 from '@/components/blocks/reviews/reviews18';
import Component2 from '@/components/blocks/reviews/reviews2';
import Component3 from '@/components/blocks/reviews/reviews23';
import Component4 from '@/components/blocks/reviews/reviews3';
import Component5 from '@/components/blocks/reviews/reviews4';
import Component6 from '@/components/blocks/reviews/reviews5';
import Component7 from '@/components/blocks/reviews/reviews6';
import Component8 from '@/components/blocks/reviews/reviews8';
import Component9 from '@/components/blocks/reviews/reviews9';

const meta: Meta = {
  title: 'Blocks/Reviews',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryReviews1: StoryObj = {
  name: 'reviews 1',
  render: () => <Component0 />,
};

export const StoryReviews18: StoryObj = {
  name: 'reviews 18',
  render: () => <Component1 />,
};

export const StoryReviews2: StoryObj = {
  name: 'reviews 2',
  render: () => <Component2 />,
};

export const StoryReviews23: StoryObj = {
  name: 'reviews 23',
  render: () => <Component3 />,
};

export const StoryReviews3: StoryObj = {
  name: 'reviews 3',
  render: () => <Component4 />,
};

export const StoryReviews4: StoryObj = {
  name: 'reviews 4',
  render: () => <Component5 />,
};

export const StoryReviews5: StoryObj = {
  name: 'reviews 5',
  render: () => <Component6 />,
};

export const StoryReviews6: StoryObj = {
  name: 'reviews 6',
  render: () => <Component7 />,
};

export const StoryReviews8: StoryObj = {
  name: 'reviews 8',
  render: () => <Component8 />,
};

export const StoryReviews9: StoryObj = {
  name: 'reviews 9',
  render: () => <Component9 />,
};

