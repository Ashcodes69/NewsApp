import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

const News = ({
  country,
  category,
  pageSize,
  apiKey,
  setProgress,
  mode,
  toggleMode,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    document.title = `${capitalize(category)} - NewsApp`;

    const updateNews = async () => {
      try {
        setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

        setLoading(true);
        setProgress(30);

        let data = await fetch(url);
        let parseData = await data.json();
        setProgress(50);
        setProgress(70);

        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        setProgress(100);
      } catch (error) {
        console.error(error);
        alert("Site not working");
      }
    };

    updateNews();
  }, [country, category, apiKey, pageSize, page, setProgress]);

  const handlePreviousClick = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextClick = () => {
    if (page + 1 <= Math.ceil(totalResults / pageSize)) setPage(page + 1);
  };

  return (
    <div className="container">
      <h2 className="text-center" style={{ marginTop: "5rem" }}>
        Top {capitalize(category)} Headlines
      </h2>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
                mode={mode}
                toggleMode={toggleMode}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handlePreviousClick}
          disabled={page <= 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleNextClick}
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
