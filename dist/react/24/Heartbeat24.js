import * as React from "react";

function Heartbeat24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M4.394 4.892c.245-.252.575-.392.93-.392.353 0 .683.14.929.392L7.5 6.176l1.248-1.284c.49-.504 1.368-.504 1.858 0 .526.54.526 1.453.001 1.993L7.5 10.08 4.394 6.885a1.458 1.458 0 010-1.993zM7.5 12.95l4.54-4.672c1.28-1.318 1.28-3.463 0-4.782C10.85 2.273 8.764 2.2 7.5 3.32A3.263 3.263 0 005.324 2.5c-.9 0-1.738.354-2.364.998-1.28 1.318-1.28 3.463 0 4.78l4.54 4.673zM20.57 15.015L17.02 9.1l-4.92 7.874-1.988-3.97-2.598 4.011h-5.51v2H8.6l1.288-1.989 2.018 4.03 5.079-8.126 2.45 4.085h2.568v-2z" />
      </g>
    </svg>
  );
}

export default Heartbeat24;
