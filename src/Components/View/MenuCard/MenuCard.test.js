import React from "react";
import { shallow } from "enzyme";
import MenuCard from "./MenuCard";

describe("Render MenuCard Component ", () => {
  const wrapper = shallow(<MenuCard />);
  it("should render succesfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
