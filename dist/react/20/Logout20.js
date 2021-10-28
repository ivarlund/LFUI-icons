import * as React from "react";

function Logout20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M14.782 7.697L16.047 9h-6.05v2h6.05l-1.265 1.303 1.434 1.394L19.808 10l-3.592-3.696-1.434 1.393zm2.217 2.282l.02.02-.02.023v-.043z" />
        <path d="M8.907 16a5.83 5.83 0 01-4.176-1.75c-2.313-2.344-2.313-6.157 0-8.5A5.83 5.83 0 018.907 4a5.83 5.83 0 014.176 1.75l1.424-1.405A7.818 7.818 0 008.907 2a7.818 7.818 0 00-5.6 2.345c-3.077 3.118-3.077 8.191 0 11.31A7.818 7.818 0 008.907 18a7.818 7.818 0 005.6-2.345l-1.423-1.405A5.83 5.83 0 018.908 16" />
      </g>
    </svg>
  );
}

export default Logout20;
