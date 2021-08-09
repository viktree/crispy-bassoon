import React from "react";

import "./index.styl";

const BlogPost = ({ title, date, timeEstimate, rawPost }) => {
  const subtitle = date + " | " + timeEstimate;
  const content = { __html: rawPost };
  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <h1 className="blog-post-title">{title}</h1>
        <p className="blog-post-datetime">{subtitle}</p>
      </header>
      <section dangerouslySetInnerHTML={content} />
      <hr className="blog-post-end" />
    </article>
  );
};

export default BlogPost;
