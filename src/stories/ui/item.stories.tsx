import type { Meta, StoryObj } from '@storybook/react';
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from '@/components/ui/item';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { FileText, Mail, Bell } from 'lucide-react';

const meta: Meta = {
  title: 'UI/Item',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => (
    <Item className="w-[400px] border rounded-lg">
      <ItemMedia>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>John Doe</ItemTitle>
        <ItemDescription>
          Software Engineer at Acme Inc.
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const WithIcon: StoryObj = {
  name: 'With Icon',
  render: () => (
    <div className="w-[400px] space-y-2">
      <Item className="border rounded-lg">
        <ItemMedia>
          <div className="p-2 bg-blue-100 rounded-lg">
            <Mail className="h-5 w-5 text-blue-600" />
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>New message received</ItemTitle>
          <ItemDescription>
            You have a new message from Sarah.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item className="border rounded-lg">
        <ItemMedia>
          <div className="p-2 bg-green-100 rounded-lg">
            <FileText className="h-5 w-5 text-green-600" />
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Document uploaded</ItemTitle>
          <ItemDescription>
            Your document has been uploaded successfully.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item className="border rounded-lg">
        <ItemMedia>
          <div className="p-2 bg-orange-100 rounded-lg">
            <Bell className="h-5 w-5 text-orange-600" />
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Reminder</ItemTitle>
          <ItemDescription>
            Meeting starts in 15 minutes.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithBadge: StoryObj = {
  name: 'With Badge',
  render: () => (
    <Item className="w-[400px] border rounded-lg">
      <ItemMedia>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <div className="flex items-center gap-2">
          <ItemTitle>Jane Smith</ItemTitle>
          <Badge variant="secondary">Admin</Badge>
        </div>
        <ItemDescription>
          Product Manager at Tech Corp
        </ItemDescription>
      </ItemContent>
    </Item>
  ),
};
