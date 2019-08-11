import React from "react";
import { shallow } from "enzyme";
import Comment from "./comment";
import articles from "../../fixtures";
import CommentDriver from "./comment.driver";

const comment = articles[0].comments[0];

describe("<Comment />", () => {
  let driver;

  beforeEach(() => {
    driver = new CommentDriver(shallow(<Comment comment={comment} />));
  });

  it("should render text", () => {
    expect(driver.get.text()).toBe(comment.text);
  });

  it("should render user", () => {
    expect(driver.get.user()).toBe(comment.user);
  });
});
