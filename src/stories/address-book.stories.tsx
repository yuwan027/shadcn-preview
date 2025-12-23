import type { Meta, StoryObj } from '@storybook/react';

import AddressBook1 from '@/components/blocks/address-book/address-book1';
import AddressBook2 from '@/components/blocks/address-book/address-book2';

const meta: Meta = {
  title: 'Blocks/Address Book',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const AddressBook1: StoryObj = {
  name: 'Address Book1',
  render: () => <AddressBook1 />,
};

export const AddressBook2: StoryObj = {
  name: 'Address Book2',
  render: () => <AddressBook2 />,
};

