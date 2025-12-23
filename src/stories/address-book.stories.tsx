import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/address-book/address-book1';
import Component1 from '@/components/blocks/address-book/address-book2';

const meta: Meta = {
  title: 'Blocks/Address Book',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryAddressBook1: StoryObj = {
  name: 'address book 1',
  render: () => <Component0 />,
};

export const StoryAddressBook2: StoryObj = {
  name: 'address book 2',
  render: () => <Component1 />,
};

