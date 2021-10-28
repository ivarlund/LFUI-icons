import * as React from "react";

function PensionPrivate20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M5.297 13h9.406v-2H5.297zM6.294 8h7.412L9.999 1.001z" />
        <path d="M5.91 13l2.117-4H5.764l-2.118 4zM16.353 13l-2.118-4H11.97l2.118 4zM14.619 14l1.059 2H4.322l1.059-2H3.118L1 18h18l-2.118-4z" />
      </g>
    </svg>
  );
}

export default PensionPrivate20;
