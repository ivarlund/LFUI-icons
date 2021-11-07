import * as React from "react";

function ArrowStandardLeft({ title, titleId, ...props }) {
  return (
    <svg width={28} height={16} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="currentColor">
        <path d="M28 7H3v2h25z" />
        <path d="M9.028 2.7L7.614 1.286.896 8.003l6.718 6.718 1.414-1.414-5.303-5.304z" />
      </g>
    </svg>
  );
}

export default ArrowStandardLeft;
