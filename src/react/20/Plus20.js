import * as React from "react";

function Plus20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M9 4v5H4v2h5v5h2.001v-5H16V9h-4.999V4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Plus20;
