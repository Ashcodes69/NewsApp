import React from "react";

function Spiner() {
  return (
    <div className="text-center">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="my-4">loading..</span>
    </div>
  );
}

export default Spiner;
