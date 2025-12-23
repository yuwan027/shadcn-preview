import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/ecommerce-footer/ecommerce-footer1';
import Component1 from '@/components/blocks/ecommerce-footer/ecommerce-footer19';
import Component2 from '@/components/blocks/ecommerce-footer/ecommerce-footer2';
import Component3 from '@/components/blocks/ecommerce-footer/ecommerce-footer20';

const meta: Meta = {
  title: 'Blocks/Ecommerce Footer',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryEcommerceFooter1: StoryObj = {
  name: 'ecommerce footer 1',
  render: () => <Component0 />,
};

export const StoryEcommerceFooter19: StoryObj = {
  name: 'ecommerce footer 19',
  render: () => <Component1 />,
};

export const StoryEcommerceFooter2: StoryObj = {
  name: 'ecommerce footer 2',
  render: () => <Component2 />,
};

export const StoryEcommerceFooter20: StoryObj = {
  name: 'ecommerce footer 20',
  render: () => <Component3 />,
};

