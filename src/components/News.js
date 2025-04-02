import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import Spiner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true,
    };
    document.title = `${this.capitalize(this.props.category)}--NewsApp`;
  }

  async updateNews() {
    try {
      this.props.setProgress(0);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=667b7a7c4df44cf68740c482c946dabe&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      this.props.setProgress(30);
      let data = await fetch(url);
      let parseData = await data.json();
      this.props.setProgress(50);
      this.props.setProgress(70);
      this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading: false,
      });
      this.props.setProgress(100);
    } catch (error) {
      console.log(error);
      alert("Site not working");
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePreviousClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      () => this.updateNews()
    );
  };

  handleNextClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => this.updateNews()
    );
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center my-4" style={{ margin: "35px" }}>
          Top {this.capitalize(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spiner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
