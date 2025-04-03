import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsItems from "./NewsItems";
import Spiner from "./Spinner";

const SearchResults = ({ apiKey, mode, setProgress }) => {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setProgress(10);
      try {
        const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
        const response = await fetch(url);
        setProgress(50);
        const data = await response.json();
        setArticles(data.articles || []);
        setProgress(100);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setProgress(100);
      }
      setLoading(false);
    };

    fetchSearchResults();
  }, [query, apiKey, setProgress]);

  return (
    <div className="container my-4">
      <h2 className="text-center">Search Results for "{query}"</h2>
      {loading && <Spiner></Spiner>}
      {!loading && articles.length === 0 && (
        <h4 className="text-center">No results found.</h4>
      )}
      <div className="row">
        {!loading &&
          articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItems
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source?.name}
                mode={mode}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
