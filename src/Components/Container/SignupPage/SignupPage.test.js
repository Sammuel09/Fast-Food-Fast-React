import React from 'react';
import { shallow } from 'enzyme';
import SignupPage from './SignupPage';
const signUpUser = jest.fn();
const preventDefault = jest.fn();

describe('Render Signup Component ', () => {
  const wrapper = shallow(<SignupPage />);
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
