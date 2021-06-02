import React from 'react';
import { render } from 'enzyme';
import Home from './index';

describe('Home', () => {
  it('should render without crashing', () => {
    const component = render(<Home />);
    expect(component).toBeTruthy();
  });
});
