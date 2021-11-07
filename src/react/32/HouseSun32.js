import * as React from "react";

function HouseSun32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M24 3h-2c0 3.859 3.14 7 7 7V8c-2.804 0-5-2.196-5-5zM18.687 11.86l1.41 1.418 3.086-3.069-1.41-1.418zM15.957 6H20V4h-4.043zM26 16h2v-4h-2zM3 17.95V29h2V18.95l7.684-5.772L20 18.934V29h2V17.964l-9.288-7.307z" />
        <path d="M9 29h2v-6h3v6h2v-8H9z" />
      </g>
    </svg>
  );
}

export default HouseSun32;
