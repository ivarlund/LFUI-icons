import * as React from "react";

function MenuEnvelope32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M5 24h22V8H5v16zM29 6v20H3V6h26z" />
        <path d="M16.038 16.962L4.678 6.587 3.322 8.06l12.72 11.625L28.679 8.057 27.321 6.59zM27.733 23.32l-5.5-6-1.466 1.36 5.5 6zM5.733 24.68l5.5-6-1.466-1.36-5.5 6z" />
      </g>
    </svg>
  );
}

export default MenuEnvelope32;
