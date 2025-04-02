import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 10;
  const country = "us";

  return (
    <Router>
      <Navbar />
      <LoadingBar color="#28a745" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              key="general"
              apiKey={apiKey}
              pageSize={pageSize}
              country={country}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              apiKey={apiKey}
              pageSize={pageSize}
              country={country}
              category="business"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              apiKey={apiKey}
              pageSize={pageSize}
              country={country}
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              apiKey={apiKey}
              pageSize={pageSize}
              country={country}
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              apiKey={apiKey}
              pageSize={pageSize}
              country={country}
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              key="science"
              apiKey={apiKey}
              pageSize={pageSize}
              country={country}
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              apiKey={apiKey}
              pageSize={pageSize}
              country={country}
              category="sports"
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
