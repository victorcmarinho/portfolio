import React from 'react';

import { render } from '@testing-library/react';
import * as ThemeContext from 'hooks/ThemeContext';

import { Text } from './index';

describe('<Text/>', () => {
  const toggle = jest.fn();
  beforeEach(() => {
    jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
      toggle,
      themeState: { mode: 'light' },
    });
  });

  it('should render', () => {
    const component = render(<Text />);
    expect(component).toBeTruthy();
  });
});
