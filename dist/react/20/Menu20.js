import * as React from "react";

function Menu20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M3 6h14V4H3zM3 11h14V9H3zM3 16h14v-2H3z" />
      </g>
    </svg>
  );
}

export default Menu20;
