import * as React from "react";

function CheckEnclosed20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M10 3c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" />
        <path d="M8.854 14.247l-3.56-3.604L6.72 9.238l2.149 2.176L13.507 6.8l1.41 1.418z" />
      </g>
    </svg>
  );
}

export default CheckEnclosed20;
