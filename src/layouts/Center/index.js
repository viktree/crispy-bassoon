import React from "react";

const Center = (props) => {
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "35vh",
    }}
  >
    {props.children}
  </div>;
};

export default Center;
