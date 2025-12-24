import type { Meta, StoryObj } from '@storybook/react';
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyContent,
  EmptyTitle,
  EmptyDescription,
} from '@/components/ui/empty';
import { Button } from '@/components/ui/button';
import { Inbox, Search, FileX } from 'lucide-react';

const meta: Meta = {
  title: 'UI/Empty',
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => (
    <Empty className="w-[400px]">
      <EmptyMedia>
        <Inbox className="h-12 w-12 text-muted-foreground" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          There are no items to display at this time.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithAction: StoryObj = {
  name: 'With Action',
  render: () => (
    <Empty className="w-[400px]">
      <EmptyMedia>
        <FileX className="h-12 w-12 text-muted-foreground" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No files uploaded</EmptyTitle>
        <EmptyDescription>
          Get started by uploading your first file.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="mt-4">
        <Button>Upload file</Button>
      </EmptyContent>
    </Empty>
  ),
};

export const SearchNoResults: StoryObj = {
  name: 'Search No Results',
  render: () => (
    <Empty className="w-[400px]">
      <EmptyMedia>
        <Search className="h-12 w-12 text-muted-foreground" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filter to find what you're looking for.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="mt-4">
        <Button variant="outline">Clear filters</Button>
      </EmptyContent>
    </Empty>
  ),
};
