import type { Meta, StoryObj } from '@storybook/react';

import Service3 from '@/components/blocks/service/service3';
import Service4 from '@/components/blocks/service/service4';
import Service5 from '@/components/blocks/service/service5';
import Service6 from '@/components/blocks/service/service6';
import Service7 from '@/components/blocks/service/service7';

const meta: Meta = {
  title: 'Blocks/Service',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Service3: StoryObj = {
  name: 'Service3',
  render: () => <Service3 />,
};

export const Service4: StoryObj = {
  name: 'Service4',
  render: () => <Service4 />,
};

export const Service5: StoryObj = {
  name: 'Service5',
  render: () => <Service5 />,
};

export const Service6: StoryObj = {
  name: 'Service6',
  render: () => <Service6 />,
};

export const Service7: StoryObj = {
  name: 'Service7',
  render: () => <Service7 />,
};

