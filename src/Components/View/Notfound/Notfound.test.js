import React from 'react';
import { shallow } from 'enzyme';

import Notfound from './Notfound';

describe('Render Notfound Component ', () => {
  const wrapper = shallow(<Notfound />);
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
