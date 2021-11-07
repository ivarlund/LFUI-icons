import * as React from "react";

function Plus24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11 6v5H6v2h5v5h2.001v-5H18v-2h-4.999V6z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Plus24;
