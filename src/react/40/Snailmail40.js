import * as React from "react";

function Snailmail40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M2 34h36v-2H2zM28 4V2h-5v13.98h2V4z" />
          <path d="M25 8H9.783v2H25zM19 33v5h2v-5z" />
          <path d="M16.263 32.091v-17.96a6.131 6.131 0 00-12.263 0V30h2V14.131a4.131 4.131 0 018.263 0v17.96h2zM37.98 32.091v-17.96A6.131 6.131 0 0031.849 8H27v2h4.849a4.131 4.131 0 014.131 4.131v17.96h2z" />
          <path d="M10 18h5v-2H8v14h6.868v-2H10z" />
        </g>
      </g>
    </svg>
  );
}

export default Snailmail40;
