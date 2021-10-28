import * as React from "react";

function PensionCapitalMc70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <g strokeWidth={2}>
          <path
            d="M23.95 32l-7.121 13h36.574l-7.341-13H23.95zM35.003 11.216L25.863 28h18.34l-9.2-16.784z"
            stroke="#E30613"
          />
          <path
            d="M14.734 49L8.69 60H61.3l-6.121-11H14.734z"
            stroke="#005AA0"
          />
        </g>
      </g>
    </svg>
  );
}

export default PensionCapitalMc70;
