import * as React from "react";

function Wallet40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M33.857 5v2H5a1 1 0 00-1 1v25a1 1 0 001 1h29v-5.96h2V36H5a3 3 0 01-3-3V8a3 3 0 013-3h28.857zM36 9v8h2v11h-8v-2h6v-7h-6v-2h4v-6H6V9h30z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Wallet40;
