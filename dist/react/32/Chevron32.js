import * as React from "react";

function Chevron32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M13.414 7.51L12 8.924l7.071 7.071-7.07 7.073 1.414 1.414 7.071-7.072 1.413-1.415-1.413-1.413z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Chevron32;
