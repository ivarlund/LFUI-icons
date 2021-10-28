import * as React from "react";

function IdCard24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M20 16.2c0 .394-.344.8-.8.8-9.05.02-13.85.02-14.4 0-.347 0-.8-.39-.8-.8V7.8c0-.441.359-.8.8-.8h14.4c.441 0 .8.359.8.8v8.4zM4.8 5a2.794 2.794 0 00-2.672 2.008A2.77 2.77 0 002 7.8v8.4C2 17.813 3.313 19 4.8 19h14.4c1.613 0 2.8-1.25 2.8-2.8V7.8C22 6.256 20.744 5 19.2 5H4.8z" />
        <path d="M9.5 9v1c-.55 0-1 .45-1 1 0 .551.45 1 1 1s1-.449 1-1c0-.55-.45-1-1-1V9zm0 0V8c1.655 0 3 1.345 3 3 0 1.656-1.345 3-3 3s-3-1.344-3-3c0-1.655 1.345-3 3-3v1z" />
        <path d="M14.5 17h-2a3 3 0 00-6 0h-2a5 5 0 1110 0zM14 11h4V9h-4zM14 14h4v-2h-4z" />
      </g>
    </svg>
  );
}

export default IdCard24;
