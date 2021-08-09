import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Link } from "../layouts";

import { BlogPostSummary, SiteWrapper, SEO } from "../components";

const BlogPost = ({ node }) => {
  const id = node?.fields?.slug;
  const title = node?.frontmatter?.title ?? id;
  const date = node?.frontmatter?.date;
  const readingTime = node?.fields?.readingTime?.text ?? id;

  return (
    <BlogPostSummary
      id={id}
      title={title}
      date={date}
      timeEstimate={readingTime}
      rawSummery={node.excerpt}
    />
  );
};

const IndexPage = () => {
  const data = useStaticQuery(pageQuery);
  const posts = data?.allMarkdownRemark?.edges;

  return (
    <SiteWrapper>
      <SEO title="Home" />
      <h1>My writings</h1>
      <p>
        I write blog posts to clarify my ideas and improve my communication
        skills. If you read my writing, you will soon find out that I am not the
        world’s best writer. I'm sure I'll get better over time.
      </p>
      <h2>Blog Posts</h2>
      <ul>{posts.map(BlogPost)}</ul>
      <h2>Publications</h2>
      <ul>
        <li>
          <Link
            href="https://www.microwavejournal.com/articles/34577-sdr-in-military-and-aerospace---beyond-tactical-radios"
            text="SDR in military and aerospace - beyond tactical radios"
          />
        </li>
      </ul>
      <h2>Tutorials</h2>
      <ul>
        <li>
          <Link
            href="http://support.pervices.com/tutorials/pvt-0"
            text="Putting together a waterfall graph in gnuradio"
          />
        </li>
        <li>
          <Link
            href="http://support.pervices.com/tutorials/pvt-1"
            text="Building an FM Receiver with gnuradio"
          />
        </li>
        <li>
          <Link
            href="http://support.pervices.com/tutorials/pvt-2"
            text="Building an FM Receiver with gnuradio libraries in C++"
          />
        </li>
        <li>
          <Link
            href="http://support.pervices.com/tutorials/pvt-3"
            text="Checking Rx Phase Coherency on an SDR"
          />
        </li>
      </ul>
    </SiteWrapper>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
