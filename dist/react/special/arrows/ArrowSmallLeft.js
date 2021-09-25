import * as React from "react";

function SvgArrowSmallLeft(props) {
  return (
    <svg width={21} height={12} {...props}>
      <g fillRule="nonzero" fill="currentColor">
        <path d="M21 5H3v2h18z" />
        <path d="M7.279 1.76L5.865.346.208 6.003l5.657 5.657 1.414-1.415-4.243-4.242z" />
      </g>
    </svg>
  );
}

export default SvgArrowSmallLeft;
