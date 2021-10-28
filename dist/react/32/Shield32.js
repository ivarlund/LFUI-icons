import * as React from "react";

function Shield32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M23.25 4H8.75c0 1.912-1.798 3.75-3.75 3.75v9.492C5 24.062 16 29 16 29s11-4.938 11-11.758V7.75c-1.837 0-3.75-1.876-3.75-3.75m-1.581 2A6.393 6.393 0 0025 9.331v7.911c0 4.115-5.89 7.958-9 9.539-3.111-1.582-9-5.425-9-9.539v-7.88A6.072 6.072 0 0010.362 6h11.307" />
        <path
          fillRule="nonzero"
          d="M11.5 12.414L12.914 11l7.657 7.657-1.414 1.414z"
        />
        <path
          fillRule="nonzero"
          d="M19.157 11l1.414 1.414-7.657 7.657-1.414-1.414z"
        />
      </g>
    </svg>
  );
}

export default Shield32;
