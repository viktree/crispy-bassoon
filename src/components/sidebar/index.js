/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FaGithub, FaRegFilePdf, FaLinkedin, FaLock } from "react-icons/fa";

import Toronto from "./toronto";

import headNormal from "../../assets/head.svg";
import headWink from "../../assets/head-wink.svg";

import { ImageHoverSwap } from "../../layouts";

import "./index.styl";

const PageLink = ({ path, text }) => (
  <span>
    <Link to={path}>{text}</Link>
    <br />
  </span>
);

const Avatar = () => (
  <ImageHoverSwap
    className="sidebar-avatar"
    alt="Logo"
    key="vik-headshot-100"
    firstImage={headNormal}
    secondImage={headWink}
  />
);

const GithubCircle = () => (
  <a href="https://github.com/viktree" aria-label="Link to my github">
    <FaGithub className="sidebar-icon" size="30px" />
  </a>
);

const ResumeCircle = () => (
  <a
    href="https://viktree-resume.s3.amazonaws.com/resume-2021.pdf"
    aria-label="Link to my resmue"
  >
    <FaRegFilePdf className="sidebar-icon" size="30px" />
  </a>
);

const LinkedinCircle = () => (
  <a
    href="https://www.linkedin.com/in/vikramvenkataramanan"
    aria-label="Link to my linkedin"
  >
    <FaLinkedin className="sidebar-icon" size="30px" />
  </a>
);

const PgpCircle = () => (
  <a path="/pgp" text="Home">
    <FaLock className="sidebar-icon" size="30px" />
  </a>
);

const Sidebar = () => {
  const data = useStaticQuery(query);
  const metadata = data?.site?.siteMetadata;
  const description = metadata?.welcomeMessage;
  const license = metadata?.license;

  return (
    <div className="sidebar-outer">
      <span className="sidebar-toronto">
        <Toronto />
      </span>
      <div className="sidebar">
        <div className="sidebar-container">
          <span>
            <Avatar />
            <GithubCircle />
            <ResumeCircle />
            <LinkedinCircle />
            <PgpCircle />
          </span>
          <div className="sidebar-speech-bubble">{description}</div>
          <div className="sidebar-links">
            <PageLink path="/" text="Home" />
            <PageLink path="/" text="Writings" />
            <PageLink path="/contact" text="Contact Me" />
          </div>
          <span className="sidebar-license">{license}</span>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

const query = graphql`
  query SidebarQuery {
    site {
      siteMetadata {
        welcomeMessage
        license
      }
    }
  }
`;

export default Sidebar;
