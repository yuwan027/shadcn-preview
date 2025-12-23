import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/waitlist/waitlist2';
import Component1 from '@/components/blocks/waitlist/waitlist3';

const meta: Meta = {
  title: 'Blocks/Waitlist',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryWaitlist2: StoryObj = {
  name: 'waitlist 2',
  render: () => <Component0 />,
};

export const StoryWaitlist3: StoryObj = {
  name: 'waitlist 3',
  render: () => <Component1 />,
};

