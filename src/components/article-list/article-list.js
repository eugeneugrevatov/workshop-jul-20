import React from "react";
import { connect } from "react-redux";
import Article from "../article";
import accordion from "../../decorators/accordion";

function ArticleList({ articles, isOpen, setOpenId }) {
  const setContainerRef = containerRef =>
    console.log("container: ", containerRef);

  return (
    <div ref={setContainerRef}>
      {articles.map(article => (
        <Article
          key={article.id}
          article={article}
          isOpen={isOpen(article.id)}
          onBtnClick={setOpenId(article.id)}
        />
      ))}
    </div>
  );
}

function filterArticles(state) {
  const { after, before, title } = state.filters;
  return state.articles
    .filter(art => !title || art.title === title)
    .filter(art => !after || new Date(art.date) >= after)
    .filter(art => !before || new Date(art.date) <= before);
}

export default connect(state => ({ articles: filterArticles(state) }))(
  accordion(ArticleList)
);
