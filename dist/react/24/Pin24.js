import * as React from "react";

function Pin24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M17.5 9.544C17.5 6.486 15.028 4 12 4S6.5 6.486 6.5 9.544c0 1.435.572 2.833 1.607 3.927l3.81 3.837h.165l3.813-3.84c1.04-1.107 1.605-2.498 1.605-3.924zm-.168 5.316l-4.417 4.448h-1.83L6.688 14.88C5.27 13.382 4.5 11.494 4.5 9.544 4.5 5.384 7.865 2 12 2s7.5 3.384 7.5 7.544c0 1.95-.77 3.838-2.168 5.316z" />
        <path d="M5 19v2h14v-2zM12 10.501c-.57 0-1-.43-1-1A.978.978 0 0112 8.5c.57 0 1 .43 1 1.001h2A2.969 2.969 0 0012 6.5c-1.682 0-3 1.318-3 3.001 0 1.682 1.318 3 3 3v-2z" />
      </g>
    </svg>
  );
}

export default Pin24;
