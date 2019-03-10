import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from './LoginPage';

describe('Render Login Component ', () => {
  const wrapper = shallow(<LoginPage />);
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
