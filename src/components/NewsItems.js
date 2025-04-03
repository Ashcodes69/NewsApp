import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source, mode } = props;
  return (
    <div className="my-3">
      <div className="card"style={{backgroundColor:`${mode==="light"?"white":"#040F16"}`,color:`${mode==="light"?"black":"white"}`}}>
        <img src={imageUrl} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <span className="badge text-bg-secondary">Published by {source}</span>
          <p className="card-text">
            <small 
            // className="text-muted"

             style={{
              color: mode === "dark" ? "#808080" : "#696969"
            }}>
              Author {author ? author : "Unknown"} published on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            className="btn btn-sm btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
