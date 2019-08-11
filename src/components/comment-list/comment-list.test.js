import React from "react";
import { shallow, mount } from "enzyme";
import { CommentList } from "./comment-list";
import articles from "../../fixtures";

const comments = articles[0].comments;

describe("<CommentList>", () => {
  describe("When open", () => {
    let subject;

    beforeEach(() => {
      subject = shallow(<CommentList comments={comments} isOpen={true} />);
    });

    it("should render body", () => {
      expect(subject.find('[data-id="comment-list-body"]').exists()).toBe(true);
    });
  });

  // describe('When closed', () => {
  //     let subject;
  //
  //     beforeEach(() => {
  //         subject = shallow(<CommentList comments={[]} isOpen={false}/>);
  //     });
  //
  //     it('should ', () => {
  //
  //     });
  //
  // });
});
