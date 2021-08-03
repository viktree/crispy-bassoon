import React from "react";

import Image from "../Image/index";

const ImageHoverSwap = (props) => (
  <Image
    src={props.firstImage}
    onMouseOver={(e) => (e.currentTarget.src = props.secondImage)}
    onFocus={() => {}}
    onMouseOut={(e) => (e.currentTarget.src = props.firstImage)}
    onBlur={() => {}}
    {...props}
  />
);

export default ImageHoverSwap;
