import * as React from "react";

function SvgArrowLargeLeft(props) {
  return (
    <svg width={32} height={16} {...props}>
      <g fillRule="nonzero" fill="currentColor">
        <path d="M32 7H3v2h29z" />
        <path d="M9.278 2.35L7.864.936.793 8.006l7.071 7.072 1.414-1.414-5.657-5.657z" />
      </g>
    </svg>
  );
}

export default SvgArrowLargeLeft;
