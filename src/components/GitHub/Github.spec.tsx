import React from 'react';

import { render } from '@testing-library/react';

import { GitHub } from './index';

describe('<Star/>', () => {
  it('should render', () => {
    const component = render(<GitHub />);
    expect(component).toBeTruthy();
  });
});
