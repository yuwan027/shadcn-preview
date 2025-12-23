import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/timeline/timeline1';
import Component1 from '@/components/blocks/timeline/timeline10';
import Component2 from '@/components/blocks/timeline/timeline11';
import Component3 from '@/components/blocks/timeline/timeline12';
import Component4 from '@/components/blocks/timeline/timeline13';
import Component5 from '@/components/blocks/timeline/timeline14';
import Component6 from '@/components/blocks/timeline/timeline2';
import Component7 from '@/components/blocks/timeline/timeline4';
import Component8 from '@/components/blocks/timeline/timeline5';
import Component9 from '@/components/blocks/timeline/timeline6';
import Component10 from '@/components/blocks/timeline/timeline7';
import Component11 from '@/components/blocks/timeline/timeline8';

const meta: Meta = {
  title: 'Blocks/Timeline',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryTimeline1: StoryObj = {
  name: 'timeline 1',
  render: () => <Component0 />,
};

export const StoryTimeline10: StoryObj = {
  name: 'timeline 10',
  render: () => <Component1 />,
};

export const StoryTimeline11: StoryObj = {
  name: 'timeline 11',
  render: () => <Component2 />,
};

export const StoryTimeline12: StoryObj = {
  name: 'timeline 12',
  render: () => <Component3 />,
};

export const StoryTimeline13: StoryObj = {
  name: 'timeline 13',
  render: () => <Component4 />,
};

export const StoryTimeline14: StoryObj = {
  name: 'timeline 14',
  render: () => <Component5 />,
};

export const StoryTimeline2: StoryObj = {
  name: 'timeline 2',
  render: () => <Component6 />,
};

export const StoryTimeline4: StoryObj = {
  name: 'timeline 4',
  render: () => <Component7 />,
};

export const StoryTimeline5: StoryObj = {
  name: 'timeline 5',
  render: () => <Component8 />,
};

export const StoryTimeline6: StoryObj = {
  name: 'timeline 6',
  render: () => <Component9 />,
};

export const StoryTimeline7: StoryObj = {
  name: 'timeline 7',
  render: () => <Component10 />,
};

export const StoryTimeline8: StoryObj = {
  name: 'timeline 8',
  render: () => <Component11 />,
};

