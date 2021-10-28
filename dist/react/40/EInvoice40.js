import * as React from "react";

function EInvoice40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M37 3v34.592l-9.629-4.638L20 37.151l-7.372-4.197L3 37.592V3h34zm-2 2H5v29.409l7.705-3.711L20 34.849l7.295-4.151L35 34.409V5zm-6 20v2h-6v-2h6zm0-4v2H11v-2h18zM19.924 8c2.74 0 3.87 2.114 3.278 5.232h-4.82c.126 1.254.825 1.791 1.954 1.791.842 0 1.791-.25 2.544-.573l.25 1.774c-.877.483-1.88.77-2.884.77-2.454 0-4.246-1.72-4.246-4.604C16 9.38 18.007 8 19.924 8zm.018 1.81c-.896 0-1.541.734-1.577 1.88h2.92c.072-1.164-.376-1.88-1.343-1.88z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default EInvoice40;
