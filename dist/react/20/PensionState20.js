import * as React from "react";

function PensionState20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M5.764 9l-2.117 4H5.91l1.06-2h6.06l1.06 2h2.262l-2.118-4zM6.294 8h2.263l1.442-2.724L11.442 8h2.264L9.999 1zM3.117 14L1 18H19l-2.118-4z" />
      </g>
    </svg>
  );
}

export default PensionState20;
