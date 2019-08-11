import React, { useState } from "react";
import { shallow } from "enzyme";

describe("SomeTest", () => {
  let subject;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    subject = shallow(<SomeTest title={"Click me"} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Proper title", () => {
    expect(subject.find("button").text()).toBe("Click me");
  });

  it("Click handled", () => {
    subject.find("button").simulate("click");
    expect(setState).toHaveBeenCalledWith(true);
  });
});

function SomeTest({ title }) {
  const [clicked, setClicked] = React.useState(false);

  const onClick = () => setClicked(true);

  return <button onClick={onClick}>{title}</button>;
}
