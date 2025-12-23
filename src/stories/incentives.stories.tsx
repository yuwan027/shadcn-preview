import type { Meta, StoryObj } from '@storybook/react';

import Incentives1 from '@/components/blocks/incentives/incentives1';
import Incentives2 from '@/components/blocks/incentives/incentives2';
import Incentives6 from '@/components/blocks/incentives/incentives6';
import Incentives7 from '@/components/blocks/incentives/incentives7';

const meta: Meta = {
  title: 'Blocks/Incentives',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const Incentives1: StoryObj = {
  name: 'Incentives1',
  render: () => <Incentives1 />,
};

export const Incentives2: StoryObj = {
  name: 'Incentives2',
  render: () => <Incentives2 />,
};

export const Incentives6: StoryObj = {
  name: 'Incentives6',
  render: () => <Incentives6 />,
};

export const Incentives7: StoryObj = {
  name: 'Incentives7',
  render: () => <Incentives7 />,
};

