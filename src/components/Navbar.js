import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search/${query}`);
      setQuery("");
    }
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${
          props.mode === "light" ? "light" : "dark"
        } navbar-${props.mode === "light" ? "light" : "dark"} fixed-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link`} to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light"
                  ? "Enable dark mode"
                  : "Enable light mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
