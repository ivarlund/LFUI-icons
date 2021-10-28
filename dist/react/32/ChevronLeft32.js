import * as React from "react";

function ChevronLeft32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M18.485 7.51L19.9 8.924l-7.071 7.071 7.07 7.073-1.414 1.414-7.071-7.072L10 15.995l1.413-1.413z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ChevronLeft32;
