import React from 'react';
import { shallow } from 'enzyme';

import SignupPage from './SignupPage';

describe('Render Signup Component ', () => {
  const wrapper = shallow(<SignupPage />);
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
