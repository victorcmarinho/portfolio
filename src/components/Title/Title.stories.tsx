import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Title } from './index';

export default {
  title: 'Title',
  component: Title,
  args: {
    children: "Hi, I'm Victor",
    theme: '',
  },
  argTypes: {
    children: {
      name: 'Title',
      defaultValue: "Hi, I'm Victor",
      description: 'Insert your title text',
    },
    as: {
      type: null,
    },
    theme: {
      type: null,
    },
    forwardedAs: {
      type: null,
    },
  },
} as Meta;

export const Default: Story = args => <Title {...args} />;
