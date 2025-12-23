import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/incentives/incentives1';
import Component1 from '@/components/blocks/incentives/incentives2';
import Component2 from '@/components/blocks/incentives/incentives6';
import Component3 from '@/components/blocks/incentives/incentives7';

const meta: Meta = {
  title: 'Blocks/Incentives',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryIncentives1: StoryObj = {
  name: 'incentives 1',
  render: () => <Component0 />,
};

export const StoryIncentives2: StoryObj = {
  name: 'incentives 2',
  render: () => <Component1 />,
};

export const StoryIncentives6: StoryObj = {
  name: 'incentives 6',
  render: () => <Component2 />,
};

export const StoryIncentives7: StoryObj = {
  name: 'incentives 7',
  render: () => <Component3 />,
};

