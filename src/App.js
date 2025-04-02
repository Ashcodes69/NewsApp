import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  apiKey = process.env.REACT_APP_NEWS_API;

  pageSize = 10;
  country = "us";
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar color="#28a745" progress={this.state.progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                apiKey={this.apiKey}
                pageSize={this.pageSize}
                country={this.country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                country={this.country}
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={this.pageSize}
                country={this.country}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={this.pageSize}
                country={this.country}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={this.pageSize}
                country={this.country}
                category="sports"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
