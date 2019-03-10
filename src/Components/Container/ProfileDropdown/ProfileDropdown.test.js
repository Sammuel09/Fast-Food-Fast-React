import React from "react";
import { shallow } from "enzyme";

import ProfileDropdown from "./ProfileDropdown";

describe("Render Profile Component ", () => {
  const wrapper = shallow(<ProfileDropdown />);
  it("should render succesfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
