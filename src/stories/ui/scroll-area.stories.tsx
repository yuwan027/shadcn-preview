import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const meta: Meta = {
  title: 'UI/ScrollArea',
  parameters: { layout: 'centered' },
};

export default meta;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Default: StoryObj = {
  name: 'Default',
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: StoryObj = {
  name: 'Horizontal',
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <div className="h-32 w-32 bg-muted flex items-center justify-center">
                <span className="text-2xl font-bold">{i + 1}</span>
              </div>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by Artist {i + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </ScrollArea>
  ),
};
