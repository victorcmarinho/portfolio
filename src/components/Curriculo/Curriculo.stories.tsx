import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Curriculo } from '.';

export default {
  title: 'Curriculo',
  component: Curriculo,
} as Meta;

export const Default: Story = args => <Curriculo {...args} />;
