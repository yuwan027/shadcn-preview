import type { Meta, StoryObj } from '@storybook/react';
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from '@/components/ui/input-group';
import { Search, Mail, DollarSign } from 'lucide-react';

const meta: Meta = {
  title: 'UI/InputGroup',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon className="rounded-l-md rounded-r-none border-r-0">
        <Mail className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput
        className="rounded-l-none"
        placeholder="Enter your email"
      />
    </InputGroup>
  ),
};

export const WithButton: StoryObj = {
  name: 'With Button',
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupInput
        className="rounded-r-none"
        placeholder="Search..."
      />
      <InputGroupButton className="rounded-l-none">
        <Search className="h-4 w-4" />
      </InputGroupButton>
    </InputGroup>
  ),
};

export const WithPrefix: StoryObj = {
  name: 'With Prefix',
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon className="rounded-l-md rounded-r-none border-r-0">
        <DollarSign className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput
        className="rounded-none border-l-0 border-r-0"
        placeholder="0.00"
        type="number"
      />
      <InputGroupAddon className="rounded-r-md rounded-l-none border-l-0">
        USD
      </InputGroupAddon>
    </InputGroup>
  ),
};
