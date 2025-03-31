import React, { Component } from "react";

export default class Spiner extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <div
            className="spinner-border"
            role="status"
            style={{ width: "4rem", height: "4rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}
