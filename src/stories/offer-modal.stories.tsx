import type { Meta, StoryObj } from '@storybook/react';

import OfferModal1 from '@/components/blocks/offer-modal/offer-modal1';
import OfferModal4 from '@/components/blocks/offer-modal/offer-modal4';
import OfferModal5 from '@/components/blocks/offer-modal/offer-modal5';

const meta: Meta = {
  title: 'Blocks/Offer Modal',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const OfferModal1: StoryObj = {
  name: 'Offer Modal1',
  render: () => <OfferModal1 />,
};

export const OfferModal4: StoryObj = {
  name: 'Offer Modal4',
  render: () => <OfferModal4 />,
};

export const OfferModal5: StoryObj = {
  name: 'Offer Modal5',
  render: () => <OfferModal5 />,
};

