import * as React from "react";

function Document20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M3 1v18h14l-.005-14.414L13.415 1H3zm2 2h7.585l2.41 2.415L15 17H5V3z" />
        <path d="M7 8h6V6H7zM7 11h6V9H7zM7 14h6v-2H7z" />
      </g>
    </svg>
  );
}

export default Document20;
