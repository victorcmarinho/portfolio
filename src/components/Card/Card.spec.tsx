import React from 'react';

import { render } from '@testing-library/react';

import { Card } from '.';
import { props } from '../../mocks/CardMock';

describe('<Card/>', () => {
  it('should render', () => {
    const component = render(<Card {...props} />);
    expect(component).toBeTruthy();
  });
});
