import type { Meta, StoryObj } from '@storybook/react';

import Resources1 from '@/components/blocks/resources/resources1';
import Resources2 from '@/components/blocks/resources/resources2';
import Resources3 from '@/components/blocks/resources/resources3';
import Resources4 from '@/components/blocks/resources/resources4';
import Resources5 from '@/components/blocks/resources/resources5';

const meta: Meta = {
  title: 'Blocks/Resources',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Resources1: StoryObj = {
  name: 'Resources1',
  render: () => <Resources1 />,
};

export const Resources2: StoryObj = {
  name: 'Resources2',
  render: () => <Resources2 />,
};

export const Resources3: StoryObj = {
  name: 'Resources3',
  render: () => <Resources3 />,
};

export const Resources4: StoryObj = {
  name: 'Resources4',
  render: () => <Resources4 />,
};

export const Resources5: StoryObj = {
  name: 'Resources5',
  render: () => <Resources5 />,
};

