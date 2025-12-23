import type { Meta, StoryObj } from '@storybook/react';

import EcommerceFooter1 from '@/components/blocks/ecommerce-footer/ecommerce-footer1';
import EcommerceFooter19 from '@/components/blocks/ecommerce-footer/ecommerce-footer19';
import EcommerceFooter2 from '@/components/blocks/ecommerce-footer/ecommerce-footer2';
import EcommerceFooter20 from '@/components/blocks/ecommerce-footer/ecommerce-footer20';

const meta: Meta = {
  title: 'Blocks/Ecommerce Footer',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const EcommerceFooter1: StoryObj = {
  name: 'Ecommerce Footer1',
  render: () => <EcommerceFooter1 />,
};

export const EcommerceFooter19: StoryObj = {
  name: 'Ecommerce Footer19',
  render: () => <EcommerceFooter19 />,
};

export const EcommerceFooter2: StoryObj = {
  name: 'Ecommerce Footer2',
  render: () => <EcommerceFooter2 />,
};

export const EcommerceFooter20: StoryObj = {
  name: 'Ecommerce Footer20',
  render: () => <EcommerceFooter20 />,
};

