import type { Meta, StoryObj } from '@storybook/react';

import Waitlist2 from '@/components/blocks/waitlist/waitlist2';
import Waitlist3 from '@/components/blocks/waitlist/waitlist3';

const meta: Meta = {
  title: 'Blocks/Waitlist',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Waitlist2: StoryObj = {
  name: 'Waitlist2',
  render: () => <Waitlist2 />,
};

export const Waitlist3: StoryObj = {
  name: 'Waitlist3',
  render: () => <Waitlist3 />,
};

