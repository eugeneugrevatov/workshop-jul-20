import React from "react";
import { shallow, render, mount } from "enzyme";
import ArticleDriver from "./article.driver";
import { Article } from "./article";
import articles from "../../fixtures";

const article = articles[0];

describe("<Article />", () => {
  describe("When Open", () => {
    let driver;

    beforeEach(() => {
      driver = new ArticleDriver(mount(<Article article={article} isOpen />));
    });

    it("should render body", () => {
      expect(driver.get.body().exists()).toBe(true);
    });

    it("should render comment list", () => {
      expect(driver.get.body().exists()).toBe(true);
    });

    it("should open comment list on click", () => {
      expect(driver.get.commentListBody().exists()).toBe(false);

      driver.when.commentListBtnClicked();

      expect(driver.get.commentListBody().exists()).toBe(true);
    });
  });

  describe("When Closed", () => {
    let driver;

    beforeEach(() => {
      driver = new ArticleDriver(shallow(<Article article={article} />));
    });

    it("should not render Comment List", () => {
      expect(driver.get.commentList().exists()).toBe(false);
    });
  });
});
