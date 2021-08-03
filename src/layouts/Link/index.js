import React from "react";

const Link = (props) => (
  <>
    <a href={props.href} aria-label={props.text} {...props}>
      {props.children ?? props.text}
    </a>
  </>
);

export default Link;
