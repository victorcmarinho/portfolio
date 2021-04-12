import React from 'react';
import { act } from 'react-dom/test-utils';

import { fireEvent, render } from '@testing-library/react';
import * as ThemeContext from 'hooks/ThemeContext';

import { Title } from './index';

describe('<Title/>', () => {
  const toggle = jest.fn();
  beforeEach(() => {
    jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      toggle,
      themeState: { mode: 'light' },
    });
  });

  it('should render', () => {
    const component = render(<Title />);
    expect(component).toBeTruthy();
  });
});
