import * as React from "react";

function CheckBold32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M24.072 9.534L13.77 19.794l-4.85-4.907-2.131 2.11 6.967 7.046 12.432-12.384z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default CheckBold32;
