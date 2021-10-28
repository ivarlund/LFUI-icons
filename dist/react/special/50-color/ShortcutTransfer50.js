import * as React from "react";

function ShortcutTransfer50(props) {
  return (
    <svg width={50} height={40} {...props}>
      <g strokeWidth={2} fill="none" fillRule="evenodd">
        <path d="M19 10h11" stroke="#E30613" />
        <path
          d="M21 30h11m2-1v6l12-10-12-10v5H17v5L4 15 17 5v6"
          stroke="#005AA0"
        />
      </g>
    </svg>
  );
}

export default ShortcutTransfer50;
