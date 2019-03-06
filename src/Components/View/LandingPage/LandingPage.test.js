import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from './LandingPage';

describe('Render LandingPage Component ', () => {
  const wrapper = shallow(<LandingPage />);
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
