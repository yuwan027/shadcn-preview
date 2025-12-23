import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/logos/logos1';
import Component1 from '@/components/blocks/logos/logos10';
import Component2 from '@/components/blocks/logos/logos11';
import Component3 from '@/components/blocks/logos/logos12';
import Component4 from '@/components/blocks/logos/logos13';
import Component5 from '@/components/blocks/logos/logos2';
import Component6 from '@/components/blocks/logos/logos3';
import Component7 from '@/components/blocks/logos/logos4';
import Component8 from '@/components/blocks/logos/logos5';
import Component9 from '@/components/blocks/logos/logos7';
import Component10 from '@/components/blocks/logos/logos9';

const meta: Meta = {
  title: 'Blocks/Logos',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryLogos1: StoryObj = {
  name: 'logos 1',
  render: () => <Component0 />,
};

export const StoryLogos10: StoryObj = {
  name: 'logos 10',
  render: () => <Component1 />,
};

export const StoryLogos11: StoryObj = {
  name: 'logos 11',
  render: () => <Component2 />,
};

export const StoryLogos12: StoryObj = {
  name: 'logos 12',
  render: () => <Component3 />,
};

export const StoryLogos13: StoryObj = {
  name: 'logos 13',
  render: () => <Component4 />,
};

export const StoryLogos2: StoryObj = {
  name: 'logos 2',
  render: () => <Component5 />,
};

export const StoryLogos3: StoryObj = {
  name: 'logos 3',
  render: () => <Component6 />,
};

export const StoryLogos4: StoryObj = {
  name: 'logos 4',
  render: () => <Component7 />,
};

export const StoryLogos5: StoryObj = {
  name: 'logos 5',
  render: () => <Component8 />,
};

export const StoryLogos7: StoryObj = {
  name: 'logos 7',
  render: () => <Component9 />,
};

export const StoryLogos9: StoryObj = {
  name: 'logos 9',
  render: () => <Component10 />,
};

