import type { Meta, StoryObj } from '@storybook/react';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const meta: Meta = {
  title: 'UI/Field',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => (
    <Field className="w-[300px]">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" placeholder="Enter your email" />
    </Field>
  ),
};

export const WithDescription: StoryObj = {
  name: 'With Description',
  render: () => (
    <Field className="w-[300px]">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" placeholder="Enter username" />
      <FieldDescription>
        This will be your public display name.
      </FieldDescription>
    </Field>
  ),
};

export const WithError: StoryObj = {
  name: 'With Error',
  render: () => (
    <Field className="w-[300px]">
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input id="password" type="password" placeholder="Enter password" />
      <FieldError>Password must be at least 8 characters.</FieldError>
    </Field>
  ),
};

export const FieldGroupExample: StoryObj = {
  name: 'Field Group',
  render: () => (
    <FieldGroup className="w-[300px]">
      <Field>
        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
        <Input id="firstName" placeholder="John" />
      </Field>
      <Field>
        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
        <Input id="lastName" placeholder="Doe" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email2">Email</FieldLabel>
        <Input id="email2" type="email" placeholder="john@example.com" />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
};
