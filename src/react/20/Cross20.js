import * as React from "react";

function Cross20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M14.014 4.6l-4 4-4-4L4.6 6.014l3.999 4-3.999 4 1.414 1.414 4-4 4 4 1.414-1.414-4-4 4-4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Cross20;
