/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Sidebar from "../sidebar";
import "./index.styl";

const Content = ({ content }) => (
  <div className="content-outer">
    <div className="content">{content}</div>
  </div>
);

const SiteWrapper = ({ children }) => {
  return (
    <main className="flex-grid">
      <div className="flex-grid-sidebar">
        <Sidebar />
      </div>
      <div className="flex-grid-content">
        <Content content={children} />
      </div>
    </main>
  );
};

SiteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteWrapper;
