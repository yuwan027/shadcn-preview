import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/changelog/changelog2';
import Component1 from '@/components/blocks/changelog/changelog3';
import Component2 from '@/components/blocks/changelog/changelog4';
import Component3 from '@/components/blocks/changelog/changelog5';
import Component4 from '@/components/blocks/changelog/changelog6';
import Component5 from '@/components/blocks/changelog/changelog8';

const meta: Meta = {
  title: 'Blocks/Changelog',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryChangelog2: StoryObj = {
  name: 'changelog 2',
  render: () => <Component0 />,
};

export const StoryChangelog3: StoryObj = {
  name: 'changelog 3',
  render: () => <Component1 />,
};

export const StoryChangelog4: StoryObj = {
  name: 'changelog 4',
  render: () => <Component2 />,
};

export const StoryChangelog5: StoryObj = {
  name: 'changelog 5',
  render: () => <Component3 />,
};

export const StoryChangelog6: StoryObj = {
  name: 'changelog 6',
  render: () => <Component4 />,
};

export const StoryChangelog8: StoryObj = {
  name: 'changelog 8',
  render: () => <Component5 />,
};

