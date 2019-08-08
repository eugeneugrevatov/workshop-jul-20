import React from "react";
import Header from "./header";
import ArticleList from "./article-list";
import Filters from "./filters/filters";

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <ArticleList />
    </div>
  );
}

App.propTypes = {};

export default App;
