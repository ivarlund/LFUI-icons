import * as React from "react";

function Document40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M25.77 2L34 10.09V38H7V2h18.77zM9 4v32h23l-.001-24H24V4H9zm17 16v2H12v-2h14zm0-5v2H12v-2h14zm-6-5v2h-8v-2h8zm11.055 0L26 5.031V10h5.055z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Document40;
