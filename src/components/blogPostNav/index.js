import React from "react";
import { Link } from "gatsby";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "./index.styl";

const BlogPostNavigator = ({ nextPost, previousPost }) => {
  const previousTitle = previousPost?.frontmatter?.title;
  const nextTitle = nextPost?.frontmatter?.title;
  return (
    <>
      <nav className="blog-post-nav">
        <ul className="post-navigator">
          <li className="blog-post-nav-item">
            {previousPost && (
              <Link to={previousPost?.fields?.slug} rel="prev">
                <div className="nav-container">
                  <span className="arrow">
                    <FaArrowLeft />
                  </span>
                  <span>{previousTitle}</span>
                </div>
              </Link>
            )}
          </li>
          <li>
            {nextPost && (
              <Link to={nextPost?.fields?.slug} rel="next">
                <div className="nav-container">
                  <span>{nextTitle}</span>
                  <span className="arrow">
                    <FaArrowRight />
                  </span>
                </div>
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <br />
    </>
  );
};

export default BlogPostNavigator;
