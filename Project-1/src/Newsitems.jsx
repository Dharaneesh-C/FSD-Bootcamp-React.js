import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="container mt-4">
        <div className="card position-relative">
          <img
            src={imageUrl ? imageUrl : "https://via.placeholder.com/300x150.png?text=No+Image"}
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <span
              className="badge rounded-pill bg-danger text-light position-absolute"
              style={{
                right: '10px',
                top: '10px',
              }}
            >
              {source}
            </span>
            <h5 className="card-title text-success">
              {title ? title.slice(0, 50) + "..." : "No Title"}
            </h5>
            <p className="card-text">
              {description ? description.slice(0, 120) + "..." : "No description available."}
            </p>
            <p className="card-text"><small className="text-muted">By: {author ? author : "Anonymous"}</small></p>
            <p className="card-text"><small className="text-muted">Published At: {date ? new Date(date).toLocaleString() : "Unknown"}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-danger">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}
