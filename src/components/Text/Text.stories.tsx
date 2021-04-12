import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { Text } from './index';

export default {
  title: 'Text',
  component: Text,
  args: {
    children:
      'Desenvolvedor Front End, Apaixonado por Javascript, TypeScript, Angular, React, React Native, NodeJS e atualmente Flutter',
    theme: '',
  },
  argTypes: {
    children: {
      name: 'Text',
      defaultValue:
        'Desenvolvedor Front End, Apaixonado por Javascript, TypeScript, Angular, React, React Native, NodeJS e atualmente Flutter',
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

export const Default: Story = args => <Text {...args} />;
