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

const Layout = ({ children }) => {
  return (
    <main className="flex-grid">
      <Sidebar />
      <div className="content-outer">
        <div className="content">{children}</div>
      </div>
      <div className="content-empty-space" />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
