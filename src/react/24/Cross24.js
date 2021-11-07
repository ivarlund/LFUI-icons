import * as React from "react";

function Cross24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M16.014 6.6l-4 4-4-4L6.6 8.014l3.999 4-3.999 4 1.414 1.414 4-4 4 4 1.414-1.414-4-4 4-4z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Cross24;
