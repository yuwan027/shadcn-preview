import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/offer-modal/offer-modal1';
import Component1 from '@/components/blocks/offer-modal/offer-modal4';
import Component2 from '@/components/blocks/offer-modal/offer-modal5';

const meta: Meta = {
  title: 'Blocks/Offer Modal',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryOfferModal1: StoryObj = {
  name: 'offer modal 1',
  render: () => <Component0 />,
};

export const StoryOfferModal4: StoryObj = {
  name: 'offer modal 4',
  render: () => <Component1 />,
};

export const StoryOfferModal5: StoryObj = {
  name: 'offer modal 5',
  render: () => <Component2 />,
};

