import * as React from "react";

function ChevronUp20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M4.6 12.186L6.014 13.6l4-4 4 4 1.414-1.414-4-4.001-1.415-1.413L8.6 8.185z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ChevronUp20;
