import React from "react";
import { Link } from "gatsby";

import "./index.styl";

const BlogPostSummary = ({ title, date, timeEstimate, id }) => (
  <li key={id}>
    <Link className="post-summary-link" to={id}>
      {title}
    </Link>
    {"    "}
    <small className="post-summary-subtitle">
      {date} | {timeEstimate}
    </small>
  </li>
);

export default BlogPostSummary;
