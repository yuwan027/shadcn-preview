import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/careers/careers2';
import Component1 from '@/components/blocks/careers/careers3';
import Component2 from '@/components/blocks/careers/careers5';
import Component3 from '@/components/blocks/careers/careers6';
import Component4 from '@/components/blocks/careers/careers7';
import Component5 from '@/components/blocks/careers/careers8';
import Component6 from '@/components/blocks/careers/careers9';

const meta: Meta = {
  title: 'Blocks/Careers',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryCareers2: StoryObj = {
  name: 'careers 2',
  render: () => <Component0 />,
};

export const StoryCareers3: StoryObj = {
  name: 'careers 3',
  render: () => <Component1 />,
};

export const StoryCareers5: StoryObj = {
  name: 'careers 5',
  render: () => <Component2 />,
};

export const StoryCareers6: StoryObj = {
  name: 'careers 6',
  render: () => <Component3 />,
};

export const StoryCareers7: StoryObj = {
  name: 'careers 7',
  render: () => <Component4 />,
};

export const StoryCareers8: StoryObj = {
  name: 'careers 8',
  render: () => <Component5 />,
};

export const StoryCareers9: StoryObj = {
  name: 'careers 9',
  render: () => <Component6 />,
};

