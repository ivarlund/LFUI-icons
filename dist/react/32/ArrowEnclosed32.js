import * as React from "react";

function ArrowEnclosed32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" />
        <path d="M16.033 12.197L18.757 15H10v2h8.757l-2.724 2.802 1.435 1.395L22.518 16l-5.05-5.198z" />
      </g>
    </svg>
  );
}

export default ArrowEnclosed32;
