import * as React from "react";

function Circlediagram70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M37.5 11C52.136 11 64 22.864 64 37.5S52.136 64 37.5 64 11 52.136 11 37.5v-1h25.5V11h1zm1 2.02V38.5H13.02C13.545 51.567 24.304 62 37.5 62 51.031 62 62 51.031 62 37.5c0-13.196-10.433-23.955-23.5-24.48zM33 6v27H6v-1C6 17.64 17.64 6 32 6h1zm-2 2.02C18.54 8.531 8.531 18.54 8.02 31H31V8.02z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Circlediagram70;
