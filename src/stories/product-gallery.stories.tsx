import type { Meta, StoryObj } from '@storybook/react';

import Component0 from '@/components/blocks/product-gallery/product-gallery1';
import Component1 from '@/components/blocks/product-gallery/product-gallery2';
import Component2 from '@/components/blocks/product-gallery/product-gallery3';
import Component3 from '@/components/blocks/product-gallery/product-gallery4';
import Component4 from '@/components/blocks/product-gallery/product-gallery7';

const meta: Meta = {
  title: 'Blocks/Product Gallery',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const StoryProductGallery1: StoryObj = {
  name: 'product gallery 1',
  render: () => <Component0 />,
};

export const StoryProductGallery2: StoryObj = {
  name: 'product gallery 2',
  render: () => <Component1 />,
};

export const StoryProductGallery3: StoryObj = {
  name: 'product gallery 3',
  render: () => <Component2 />,
};

export const StoryProductGallery4: StoryObj = {
  name: 'product gallery 4',
  render: () => <Component3 />,
};

export const StoryProductGallery7: StoryObj = {
  name: 'product gallery 7',
  render: () => <Component4 />,
};

