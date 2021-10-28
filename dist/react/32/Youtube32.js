import * as React from "react";

function Youtube32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M4 4v24h24V4H4zM2 2h28v28H2V2z" fillRule="nonzero" />
        <path d="M14.214 18.238v-4.861l4.674 2.439-4.674 2.422zm10.263-5.703s-.17-1.192-.688-1.717c-.657-.69-1.395-.692-1.733-.733-2.421-.175-6.052-.175-6.052-.175h-.008s-3.63 0-6.052.175c-.338.04-1.075.044-1.733.733-.519.525-.688 1.717-.688 1.717s-.173 1.4-.173 2.8v1.312c0 1.4.173 2.8.173 2.8s.17 1.192.688 1.718c.658.688 1.522.667 1.907.739 1.384.132 5.882.174 5.882.174s3.635-.006 6.056-.181c.338-.04 1.076-.044 1.733-.732.519-.526.688-1.718.688-1.718s.173-1.4.173-2.8v-1.312c0-1.4-.173-2.8-.173-2.8z" />
      </g>
    </svg>
  );
}

export default Youtube32;
