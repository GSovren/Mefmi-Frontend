import React from "react";
import '../pages/PageNotFound.css';
import {Link} from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="not-found-container">
        <h1>
          404 -- Not Found <i className="ri-folder-warning-fill"></i>
        </h1>
      </div>

      <Link to="/" className="link-home">
        <i className="ri-arrow-left-fill"></i>Return to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
