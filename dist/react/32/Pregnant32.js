import * as React from "react";

function Pregnant32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M21 25v5h-2v-5h2zM16 2a5.5 5.5 0 014.61 8.502c1.39.596 2.309 1.746 2.385 3.289L23 14v7a3.002 3.002 0 01-2.824 2.995L20 24h-5c-1.371 0-2.025-1.159-2-2.518.024-1.306.594-2.388 1.834-2.476L15 19l3-.001V15h2v6l-4.911-.001-.016.036c-.03.085-.054.203-.066.34L15 21.52c-.004.184.02.344.058.45l.013.03L20 22c.512 0 .935-.387.993-.884L21 21v-7c0-.964-.669-1.63-1.852-1.868l-.142-.025A5.474 5.474 0 0116 13c-.996 0-1.93-.265-2.735-.727a2.353 2.353 0 00-1.258 1.911L12 14.36v.966c.219-.031.44-.05.665-.059l.23-.004v2c-2.592 0-4.895 2.288-4.895 4.77 0 1.094.43 2.126 1.2 2.93.767.801 2.013 1.29 3.413 1.347l.282.006v2c-.302 0-.6-.016-.895-.046V30h-2v-2.199c-.869-.332-1.638-.82-2.245-1.454C6.635 25.176 6 23.65 6 22.033c0-2.597 1.675-4.979 4-6.098V14.36c0-1.381.649-2.64 1.69-3.445A5.5 5.5 0 0116 2zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Pregnant32;
