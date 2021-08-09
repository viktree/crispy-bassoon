import React from "react";
import { graphql } from "gatsby";
// import { DiscussionEmbed } from "disqus-react";

import { BlogPost, BlogPostNav, SiteWrapper } from "../components";

import "katex/dist/katex.min.css";

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const title = post.frontmatter.title;
  // const description = post.frontmatter.description || post.excerpt;
  const date = post?.frontmatter?.date;
  const readingTime = post?.fields?.readingTime?.text;

  const { previous, next } = pageContext;

  // const disqusShortname = data?.site?.siteMetadata?.disqusShortname;
  // const identifier = post?.id;
  // const disqusConfig = { identifier, title };

  return (
    <SiteWrapper>
      {/* <SEO title={title} description={description} /> */}
      <BlogPost
        title={title}
        date={date}
        timeEstimate={readingTime}
        rawPost={post.html}
      />
      <BlogPostNav previousPost={previous} nextPost={next} />
      {/* <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> */}
    </SiteWrapper>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        disqusShortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
