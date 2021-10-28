import * as React from "react";

function Finance32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M6.25 25A1.252 1.252 0 015 23.75V15h8v3h6v-3h8v8.75c0 .688-.562 1.25-1.25 1.25H6.25zM15 16h2v-1h-2v1zm10.75-6c.688 0 1.25.56 1.25 1.249v1.75H5v-1.75c0-.688.56-1.25 1.25-1.25h19.5zM12 8h8V6h-8v2zm10 0V4H10v4H6.25A3.253 3.253 0 003 11.249V23.75A3.254 3.254 0 006.25 27h19.5A3.254 3.254 0 0029 23.75V11.249a3.254 3.254 0 00-3.25-3.25H22z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Finance32;
