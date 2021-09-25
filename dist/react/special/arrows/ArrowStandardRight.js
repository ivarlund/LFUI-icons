import * as React from "react";

function SvgArrowStandardRight(props) {
  return (
    <svg width={28} height={16} {...props}>
      <g fillRule="nonzero" fill="currentColor">
        <path d="M0 9h25V7H0z" />
        <path d="M18.99 13.307l1.413 1.414 6.718-6.718-6.718-6.717L18.99 2.7l5.303 5.303z" />
      </g>
    </svg>
  );
}

export default SvgArrowStandardRight;
