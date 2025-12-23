import type { Meta, StoryObj } from '@storybook/react';

import Changelog2 from '@/components/blocks/changelog/changelog2';
import Changelog3 from '@/components/blocks/changelog/changelog3';
import Changelog4 from '@/components/blocks/changelog/changelog4';
import Changelog5 from '@/components/blocks/changelog/changelog5';
import Changelog6 from '@/components/blocks/changelog/changelog6';
import Changelog8 from '@/components/blocks/changelog/changelog8';

const meta: Meta = {
  title: 'Blocks/Changelog',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Changelog2: StoryObj = {
  name: 'Changelog2',
  render: () => <Changelog2 />,
};

export const Changelog3: StoryObj = {
  name: 'Changelog3',
  render: () => <Changelog3 />,
};

export const Changelog4: StoryObj = {
  name: 'Changelog4',
  render: () => <Changelog4 />,
};

export const Changelog5: StoryObj = {
  name: 'Changelog5',
  render: () => <Changelog5 />,
};

export const Changelog6: StoryObj = {
  name: 'Changelog6',
  render: () => <Changelog6 />,
};

export const Changelog8: StoryObj = {
  name: 'Changelog8',
  render: () => <Changelog8 />,
};

