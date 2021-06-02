import React from 'react';
import { render } from 'enzyme';
import Card from './index';

describe('Card', () => {
  it('should render without crashing', () => {
    const component = render(<Card />);
    expect(component).toBeTruthy();
  });
});
