import * as React from "react";

function Insurance32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M21.077 13.077c-1.853 0-3.752.855-5.068 2.216-1.305-1.39-3.134-2.216-5.027-2.216-1.364 0-2.598.313-3.632.9C8.407 10.686 11.703 8 15.154 8h1.693c3.356 0 6.662 2.687 7.767 5.91-.998-.547-2.191-.833-3.537-.833M16.847 6h-1.693C9.707 6 5 11.077 5 16.154v1.292h1.693c.869-1.71 2.543-2.369 4.289-2.369 1.746 0 3.299.97 4.172 2.37h1.693c.873-1.4 2.634-2.37 4.23-2.37 1.896 0 3.42.681 4.23 2.37H27v-1.293C27 11.077 22.24 6 16.847 6" />
        <path
          fillRule="nonzero"
          d="M15 16v9h2v-9zM17 7V4h-2v3zM10 25h2a1.5 1.5 0 003 0h2a3.5 3.5 0 01-7 0z"
        />
      </g>
    </svg>
  );
}

export default Insurance32;
