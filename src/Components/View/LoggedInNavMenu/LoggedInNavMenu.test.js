import React from 'react';
import { shallow } from 'enzyme';

import LoggedInNavMenu from './LoggedInNavMenu';

describe('Render Notfound Component ', () => {
  const wrapper = shallow(<LoggedInNavMenu />);
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
