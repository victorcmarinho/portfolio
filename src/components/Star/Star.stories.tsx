import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Star } from '.';

export default {
  title: 'Star',
  component: Star,
} as Meta;

export const Default: Story = args => <Star {...args} />;
