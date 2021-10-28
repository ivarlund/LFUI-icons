import * as React from "react";

function PdfDoc20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M4 17V3h7.586L14 5.414V7h2V4.586L12.414 1H2v18h14.002l-.009-4.002-2 .004.005 1.998z"
        />
        <path d="M6 8.05v5.942h1.207v-1.683h.875c1.14 0 1.93-.842 1.93-2.1 0-1.292-.808-2.159-1.98-2.159H6zm1.181 3.17V9.156h.901c.451 0 .774.408.774 1.02 0 .629-.323 1.046-.774 1.046h-.9zm3.562-3.17V14h1.904c1.505 0 2.508-1.198 2.508-2.992 0-1.776-1.003-2.958-2.508-2.958h-1.904zm1.198 4.802V9.197h.689c.799 0 1.326.732 1.326 1.82 0 1.104-.527 1.835-1.326 1.835h-.689zm5.27-.969h1.718V10.77h-1.717V9.164h1.929V8.05h-3.128V14h1.198v-2.117z" />
      </g>
    </svg>
  );
}

export default PdfDoc20;
