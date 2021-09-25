import * as React from "react";

function SvgCross32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <path
        d="M22.286 8.3l-6.28 6.281-6.281-6.28-1.414 1.413 6.281 6.282L8.3 22.29l1.414 1.414 6.292-6.293 6.28 6.282 1.414-1.414-6.281-6.282L23.7 9.714z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCross32;
