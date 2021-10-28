import * as React from "react";

function ExternalLink20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M12 2v2h2.586l-4.293 4.294 1.414 1.414L16 5.415V8h2V2z" />
        <path d="M3 3v14h14.001l-.007-7.001-2 .002.005 5H5V5h5V3z" />
      </g>
    </svg>
  );
}

export default ExternalLink20;
