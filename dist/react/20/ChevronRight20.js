import * as React from "react";

function ChevronRight20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M8.014 4.6L6.6 6.014l4 4-4 4 1.414 1.414 4.001-4 1.413-1.415L12.015 8.6z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ChevronRight20;
