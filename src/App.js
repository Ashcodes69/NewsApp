import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 10;
  const country = "us";

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#040F16";
      document.body.style.color = "white";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
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
              mode={mode}
              toggleMode={toggleMode}
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
              mode={mode}
              toggleMode={toggleMode}
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
              mode={mode}
              toggleMode={toggleMode}
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
              mode={mode}
              toggleMode={toggleMode}
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
              mode={mode}
              toggleMode={toggleMode}
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
              mode={mode}
              toggleMode={toggleMode}
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
              mode={mode}
              toggleMode={toggleMode}
              category="sports"
            />
          }
        />
        <Route
          path="/search/:query"
          element={
            <SearchResults
              apiKey={apiKey}
              mode={mode}
              setProgress={setProgress}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
