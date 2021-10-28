import * as React from "react";

function Clipboard20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 16.662a.331.331 0 01-.346.338H4.346A.331.331 0 014 16.662V4.33c0-.181.161-.326.346-.33H9v1H7v2h6V5h-2V4h4.634c.205.004.366.149.366.33v12.332zM11 2V1H9v1H4.325C3.021 2.027 2 3.05 2 4.33v12.332A2.317 2.317 0 004.346 19h11.308A2.317 2.317 0 0018 16.662V4.33c0-1.28-1.021-2.303-2.346-2.33H11z" />
        <path d="M6 11h8V9H6zM6 15h8v-2H6z" />
      </g>
    </svg>
  );
}

export default Clipboard20;
