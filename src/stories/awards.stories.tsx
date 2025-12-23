import type { Meta, StoryObj } from '@storybook/react';

import Awards3 from '@/components/blocks/awards/awards3';
import Awards4 from '@/components/blocks/awards/awards4';
import Awards5 from '@/components/blocks/awards/awards5';

const meta: Meta = {
  title: 'Blocks/Awards',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Awards3: StoryObj = {
  name: 'Awards3',
  render: () => <Awards3 />,
};

export const Awards4: StoryObj = {
  name: 'Awards4',
  render: () => <Awards4 />,
};

export const Awards5: StoryObj = {
  name: 'Awards5',
  render: () => <Awards5 />,
};

