import * as React from "react";

function SvgCross20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path
        d="M14.014 4.6l-4 4-4-4L4.6 6.014l3.999 4-3.999 4 1.414 1.414 4-4 4 4 1.414-1.414-4-4 4-4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCross20;
