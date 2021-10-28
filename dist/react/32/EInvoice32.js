import * as React from "react";

function EInvoice32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M29 3v25.563l-7.463-3.445L16 28.139l-5.538-3.021L3 28.563V3h26zm-2.001 2h-22v20.437l5.538-2.556L16 25.861l5.463-2.98 5.536 2.556V5zM15.924 9c2.74 0 3.87 2.114 3.278 5.232h-4.82c.126 1.254.825 1.791 1.954 1.791.842 0 1.791-.25 2.544-.573l.25 1.774c-.877.483-1.88.77-2.884.77-2.454 0-4.246-1.72-4.246-4.604C12 10.38 14.007 9 15.924 9zm.018 1.81c-.896 0-1.541.734-1.577 1.88h2.92c.072-1.164-.376-1.88-1.343-1.88z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default EInvoice32;
