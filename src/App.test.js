import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App component", () => {
  it("should match the snapshot", () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });

  it("should call updateHobbyHandler when we add text to the input", () => {
    const component = shallow(<App />);
    const spy = jest.spyOn(component.instance(), "updateHobbyHandler");
    component.instance().forceUpdate(); //fixes an issue when trying to simulate events and using spies https://github.com/airbnb/enzyme/issues/944#issuecomment-322271527

    component.find("CSS SELECTOR HERE").simulate("EVENT YOU WANT TO SIMULATE");
    console.log(component.instance());
    expect(spy).toHaveBeenCalled();
  })

  it("should update the hobby value in state with the the text I've typed", () => {
    //hint: see what's available to you by logging -> console.log(component.instance())
  })
});
