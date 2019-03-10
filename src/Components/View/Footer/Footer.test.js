import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Render Footer Component ', () => {
  const wrapper = shallow(<Footer />);
  it('should render succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
