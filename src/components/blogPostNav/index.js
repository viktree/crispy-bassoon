import React from "react";
import { Link } from "gatsby";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "./index.styl";

const BlogPostNavigator = ({ nextPost, previousPost }) => (
  <nav className="blog-post-nav">
    <ul className="post-navigator">
      <li className="blog-post-nav-item">
        {previousPost && (
          <Link to={previousPost?.fields?.slug} rel="prev">
            <FaArrowLeft /> {previousPost?.frontmatter?.title}
          </Link>
        )}
      </li>
      <li>
        {nextPost && (
          <Link to={nextPost?.fields?.slug} rel="next">
            {nextPost?.frontmatter?.title} <FaArrowRight />
          </Link>
        )}
      </li>
    </ul>
  </nav>
);

export default BlogPostNavigator;
