import * as React from "react";

function ExternalLinkInline20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M10.005 4L10 5.75h2.84L8.1 10.5l1.4 1.4 4.75-4.74v2.835H16V4z" />
        <path d="M4 5v11h11v-4h-2v2H6V7h2V5z" />
      </g>
    </svg>
  );
}

export default ExternalLinkInline20;
