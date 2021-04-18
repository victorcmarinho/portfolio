import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Card } from '.';
import { props } from '../../mocks/CardMock';
import { ICard } from './interface';

export default {
  title: 'Card',
  component: Card,
  args: { ...props },
} as Meta;

export const Default: Story<ICard> = (args: ICard) => <Card {...args} />;
