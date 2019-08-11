import React from "react";
import { shallow } from "enzyme";
import { ArticleList } from "./article-list";
import articles from "../../fixtures";

// const articles = articles.slice();

describe("<ArticleList />", () => {
  let subject;

  beforeEach(() => {
    subject = shallow(
      <ArticleList
        articles={articles}
        isOpen={() => true}
        setOpenId={() => false}
      />
    );
  });

  it("should render container", () => {
    expect(subject.find('[data-id="articles-container"]').exists()).toBe(true);
  });

  // it('should some', () => {
  //     expect(subject.find('[data-id="article-container"]').exists()).toBe(true);
  // });
});
