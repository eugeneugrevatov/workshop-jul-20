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
  return state.articles
    .filter(art => !state.filters.title || art.title === state.filters.title)
    .filter(
      art => !state.filters.after || new Date(art.date) >= state.filters.after
    )
    .filter(
      art => !state.filters.before || new Date(art.date) <= state.filters.before
    );
}

export default connect(state => ({ articles: filterArticles(state) }))(
  accordion(ArticleList)
);
