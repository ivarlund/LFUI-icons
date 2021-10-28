import * as React from "react";

function ArrowLargeRight({ title, titleId, ...props }) {
  return (
    <svg width={32} height={16} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="currentColor">
        <path d="M0 9h29V7H0z" />
        <path d="M22.743 13.664l1.414 1.414 7.07-7.071-7.07-7.071-1.414 1.414 5.656 5.657z" />
      </g>
    </svg>
  );
}

export default ArrowLargeRight;
