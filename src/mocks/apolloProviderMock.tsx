import React from 'react';

import { MockedProvider, MockedProviderProps } from '@apollo/client/testing';

export type IApolloProviderMock = MockedProviderProps;

export const ApolloProviderMock: React.FC<IApolloProviderMock> = ({
  children,
  mocks,
}) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
  </MockedProvider>
);
