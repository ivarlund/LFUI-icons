import * as React from "react";

function Briefcase20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <path
          d="M14 2v3h2.5A2.5 2.5 0 0119 7.5v8a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 011 15.5v-8A2.5 2.5 0 013.5 5H6V2h8zm3 7.999L14.333 12H5.667L3 10.001V15.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V9.999zM16.5 7h-13a.5.5 0 00-.5.5v.001L6.333 10h7.334L17 7.5a.5.5 0 00-.5-.5zM12 4H8v1h4V4z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Briefcase20;
