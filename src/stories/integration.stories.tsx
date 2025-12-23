import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/integration/integration1';
import Component1 from '@/components/blocks/integration/integration10';
import Component2 from '@/components/blocks/integration/integration11';
import Component3 from '@/components/blocks/integration/integration12';
import Component4 from '@/components/blocks/integration/integration13';
import Component5 from '@/components/blocks/integration/integration2';
import Component6 from '@/components/blocks/integration/integration4';
import Component7 from '@/components/blocks/integration/integration5';
import Component8 from '@/components/blocks/integration/integration6';
import Component9 from '@/components/blocks/integration/integration7';
import Component10 from '@/components/blocks/integration/integration8';

const meta: Meta = {
  title: 'Blocks/Integration',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryIntegration1: StoryObj = {
  name: 'integration 1',
  render: () => <Component0 />,
};

export const StoryIntegration10: StoryObj = {
  name: 'integration 10',
  render: () => <Component1 />,
};

export const StoryIntegration11: StoryObj = {
  name: 'integration 11',
  render: () => <Component2 />,
};

export const StoryIntegration12: StoryObj = {
  name: 'integration 12',
  render: () => <Component3 />,
};

export const StoryIntegration13: StoryObj = {
  name: 'integration 13',
  render: () => <Component4 />,
};

export const StoryIntegration2: StoryObj = {
  name: 'integration 2',
  render: () => <Component5 />,
};

export const StoryIntegration4: StoryObj = {
  name: 'integration 4',
  render: () => <Component6 />,
};

export const StoryIntegration5: StoryObj = {
  name: 'integration 5',
  render: () => <Component7 />,
};

export const StoryIntegration6: StoryObj = {
  name: 'integration 6',
  render: () => <Component8 />,
};

export const StoryIntegration7: StoryObj = {
  name: 'integration 7',
  render: () => <Component9 />,
};

export const StoryIntegration8: StoryObj = {
  name: 'integration 8',
  render: () => <Component10 />,
};

