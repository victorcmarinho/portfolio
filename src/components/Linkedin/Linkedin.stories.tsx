import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Linkedin } from '.';

export default {
  title: 'Linkedin',
  component: Linkedin,
} as Meta;

export const Default: Story = args => <Linkedin {...args} />;
