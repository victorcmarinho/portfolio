import React from 'react';

import { render } from '@testing-library/react';

import { Star } from './index';

describe('<Star/>', () => {
  it('should render', () => {
    const component = render(<Star />);
    expect(component).toBeTruthy();
  });
});
