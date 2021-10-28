import * as React from "react";

function BriefcaseFirstAid40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M34.183 32c1.111 0 1.884-.753 1.819-1.688l.003-18.696c.06-.826-.773-1.616-1.822-1.616H5.863c-.99 0-1.855.814-1.855 1.688v18.624c0 .874.865 1.688 1.855 1.688h28.32zM2.008 30.312V11.688C2.008 9.682 3.794 8 5.863 8h28.32c2.157 0 3.964 1.716 3.819 3.688l-.003 18.552c.15 2.07-1.587 3.76-3.816 3.76H5.863c-2.069 0-3.855-1.682-3.855-3.688z" />
        <path d="M7 9.5v24h2v-24zM31 9.5v24h2v-24zM15.008 9.312V6.688c0-.874.865-1.688 1.855-1.688h6.32c1.049 0 1.881.79 1.822 1.616l-.003 2.696h2V6.688C27.147 4.716 25.34 3 23.182 3h-6.319c-2.069 0-3.855 1.682-3.855 3.688v2.624h2zM25 20v2h-4v2h6v-6h-6v2zM15 22v-2h4v-2h-6v6h6v-2z" />
        <path d="M21 16v4h2v-6h-6v6h2v-4zM21 26h-2v-4h-2v6h6v-6h-2z" />
      </g>
    </svg>
  );
}

export default BriefcaseFirstAid40;
