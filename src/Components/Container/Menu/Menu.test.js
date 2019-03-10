import React from "react";
import { shallow } from "enzyme";

import Menu from "./Menu";

describe("Render Menu Component ", () => {
  const wrapper = shallow(<Menu />);
  it("should render succesfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
