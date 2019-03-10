import React from 'react';
import { shallow } from 'enzyme';

import NavMenu from './NavMenu';

describe('Render Notfound Component ', () => {
  const wrapper = shallow(<NavMenu />);
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
