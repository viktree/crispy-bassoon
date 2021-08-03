import React from "react";

import "./index.styl";

const BlogPost = ({ title, date, timeEstimate, rawPost }) => (
  <article className="blog-post" itemScope itemType="http://schema.org/Article">
    <header>
      <h1 className="blog-post-title" itemProp="headline">
        {title}
      </h1>
      <p className="blog-post-datetime">
        {date} | {timeEstimate}
      </p>
    </header>
    <section
      dangerouslySetInnerHTML={{ __html: rawPost }}
      itemProp="articleBody"
    />
    <hr />
  </article>
);

export default BlogPost;
