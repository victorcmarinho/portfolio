import React from 'react';

import { render } from '@testing-library/react';

import { Linkedin } from './index';

describe('<Linkedin/>', () => {
  it('should render', () => {
    const component = render(<Linkedin />);
    expect(component).toBeTruthy();
  });
});
