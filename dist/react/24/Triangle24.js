import * as React from "react";

function Triangle24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M8 6.837v10.335l8.15-5.168L8 6.837zM6 3.2l13.886 8.804L6 20.808V3.2z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Triangle24;
