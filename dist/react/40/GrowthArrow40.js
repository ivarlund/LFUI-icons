import * as React from "react";

function GrowthArrow40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M37.999 8L38 18h-2l-.001-6.636-14.217 13.799-6.6-6.231L2.685 30.727l-1.372-1.454L15.18 16.18l6.581 6.213L34.534 10H28V8h9.999z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default GrowthArrow40;
