import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { GitHub } from '.';

export default {
  title: 'GitHub',
  component: GitHub,
} as Meta;

export const Default: Story = args => <GitHub {...args} />;
