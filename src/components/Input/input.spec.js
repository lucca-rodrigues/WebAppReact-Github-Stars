import React from 'react';
import { render } from 'enzyme';
import Input from './index';

describe('Input', () => {
  it('should render without crashing', () => {
    const component = render(<Input />);
    expect(component).toBeTruthy();
  });
});
