import * as React from "react";

function Institution20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M3 16h2V8H3zM1 19h18v-2H1zM10 .848L2.721 5H1v2h2.252L10 3.151 16.789 7H19V5.022h-1.693zM7 16h2V8H7zM11 16h2V8h-2zM15 16h2V8h-2z" />
      </g>
    </svg>
  );
}

export default Institution20;
