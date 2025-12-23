import type { Meta, StoryObj } from '@storybook/react';

import Community3 from '@/components/blocks/community/community3';
import Community4 from '@/components/blocks/community/community4';
import Community5 from '@/components/blocks/community/community5';
import Community6 from '@/components/blocks/community/community6';
import Community7 from '@/components/blocks/community/community7';

const meta: Meta = {
  title: 'Blocks/Community',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Community3: StoryObj = {
  name: 'Community3',
  render: () => <Community3 />,
};

export const Community4: StoryObj = {
  name: 'Community4',
  render: () => <Community4 />,
};

export const Community5: StoryObj = {
  name: 'Community5',
  render: () => <Community5 />,
};

export const Community6: StoryObj = {
  name: 'Community6',
  render: () => <Community6 />,
};

export const Community7: StoryObj = {
  name: 'Community7',
  render: () => <Community7 />,
};

