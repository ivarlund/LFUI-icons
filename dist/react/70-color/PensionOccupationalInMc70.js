import * as React from "react";

function PensionOccupationalInMc70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M22.753 36h-2.28l2.737-5H46.5l8.475 15H15l2.737-5h2.28l-1.642 3h33.173l-6.214-11H24.395l-1.642 3z"
          fill="#E30613"
          fillRule="nonzero"
        />
        <path
          fill="#E30613"
          fillRule="nonzero"
          d="M25.322 36.136l1.435 1.388H15v1.988h11.757l-1.435 1.444 1.435 1.386 3.761-3.824-3.761-3.768z"
        />
        <path
          d="M35.003 11.096L25.857 28h18.351l-9.205-16.904zM14.734 49L8.69 60H61.3l-6.121-11H14.734z"
          stroke="#005AA0"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

export default PensionOccupationalInMc70;
