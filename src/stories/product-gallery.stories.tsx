import type { Meta, StoryObj } from '@storybook/react';

import ProductGallery1 from '@/components/blocks/product-gallery/product-gallery1';
import ProductGallery2 from '@/components/blocks/product-gallery/product-gallery2';
import ProductGallery3 from '@/components/blocks/product-gallery/product-gallery3';
import ProductGallery4 from '@/components/blocks/product-gallery/product-gallery4';
import ProductGallery7 from '@/components/blocks/product-gallery/product-gallery7';

const meta: Meta = {
  title: 'Blocks/Product Gallery',
  parameters: { layout: 'fullscreen' },
};

export default meta;

export const ProductGallery1: StoryObj = {
  name: 'Product Gallery1',
  render: () => <ProductGallery1 />,
};

export const ProductGallery2: StoryObj = {
  name: 'Product Gallery2',
  render: () => <ProductGallery2 />,
};

export const ProductGallery3: StoryObj = {
  name: 'Product Gallery3',
  render: () => <ProductGallery3 />,
};

export const ProductGallery4: StoryObj = {
  name: 'Product Gallery4',
  render: () => <ProductGallery4 />,
};

export const ProductGallery7: StoryObj = {
  name: 'Product Gallery7',
  render: () => <ProductGallery7 />,
};

