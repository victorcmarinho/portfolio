import React from 'react';
import { act } from 'react-dom/test-utils';

import * as apollo from '@apollo/client';
import { MockedResponse } from '@apollo/client/testing';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import * as ThemeContext from 'hooks/ThemeContext';
import { ApolloProviderMock } from 'mocks/apolloProviderMock';
import { GitInfosMock } from 'mocks/GitInfosMock';
import { GET_GIT_INFOS } from 'services/queryGitHub';

import Home from './Home';

describe('<Home/>', () => {
  const toggle = jest.fn();

  const renderComponent = (mocks?: ReadonlyArray<MockedResponse>) =>
    render(
      <ApolloProviderMock mocks={mocks}>
        <Home />
      </ApolloProviderMock>,
    );

  beforeEach(() => {
    jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      toggle,
      themeState: { mode: 'light' },
    });
  });

  it('should render', async () => {
    const component = renderComponent();
    expect(component).toBeTruthy();
  });

  it('should render values', async () => {
    const component = renderComponent([
      {
        request: { query: GET_GIT_INFOS },
        result: { data: GitInfosMock },
      },
    ]);

    await new Promise(resolve => setTimeout(resolve, 500));
    expect(component).toBeTruthy();
  });
});
