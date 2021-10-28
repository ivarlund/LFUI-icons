import * as React from "react";

function ShortcutChangeCompany50({ title, titleId, ...props }) {
  return (
    <svg width={50} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g strokeWidth={2} fill="none" fillRule="evenodd">
        <path d="M33 16v8.048" stroke="#E30613" />
        <path
          d="M17 17v8m1 2h-5l8 9 8-9h-4V14h-4l8-10 8 10h-5"
          stroke="#005AA0"
        />
      </g>
    </svg>
  );
}

export default ShortcutChangeCompany50;
