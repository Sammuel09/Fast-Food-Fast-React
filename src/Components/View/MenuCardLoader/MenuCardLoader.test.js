import React from "react";
import { shallow } from "enzyme";
import MenuCardLoader from "./MenuCardLoader";

describe("Render MenuCard Component ", () => {
  const wrapper = shallow(<MenuCardLoader />);
  it("should render succesfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
