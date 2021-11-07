import * as React from "react";

function Pin20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M5.5 7.538C5.5 5.036 7.519 3 10 3s4.5 2.036 4.5 4.538c0 1.177-.473 2.325-1.315 3.216L10 13.96l-3.167-3.189C5.973 9.863 5.5 8.715 5.5 7.538zm9.121 4.607c1.212-1.28 1.879-2.917 1.879-4.607C16.5 3.933 13.584 1 10 1S3.5 3.933 3.5 7.538c0 1.69.667 3.326 1.896 4.625L9.207 16H4v2h12v-2h-5.207l3.828-3.855z" />
        <path d="M10 8.501c-.57 0-1-.43-1-1A.978.978 0 0110 6.5c.57 0 1 .43 1 1.001h2A2.969 2.969 0 0010 4.5c-1.682 0-3 1.318-3 3.001 0 1.682 1.318 3 3 3v-2z" />
      </g>
    </svg>
  );
}

export default Pin20;
