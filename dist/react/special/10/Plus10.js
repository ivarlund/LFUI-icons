import * as React from "react";

function SvgPlus10(props) {
  return (
    <svg width={10} height={10} {...props}>
      <path
        d="M4 0v4H0v2h4v4h2.001V6H10V4H6.001V0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlus10;
