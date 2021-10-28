import * as React from "react";

function Circlediagram24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M13 4a9 9 0 11-9 9v-1h8V4h1zm1 2.07V14H6.07A7.002 7.002 0 0020 13a7.002 7.002 0 00-6-6.93zM11 2v9H2v-1a8 8 0 018-8h1zM9 4.083A6.005 6.005 0 004.083 9H9V4.083z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Circlediagram24;
