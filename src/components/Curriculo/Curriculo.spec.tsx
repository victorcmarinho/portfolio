import React from 'react';

import { render } from '@testing-library/react';

import { Curriculo } from './index';

describe('<Curriculo/>', () => {
  it('should render', () => {
    const component = render(<Curriculo />);
    expect(component).toBeTruthy();
  });
});
