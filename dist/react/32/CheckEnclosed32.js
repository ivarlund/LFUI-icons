import * as React from "react";

function CheckEnclosed32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" />
        <path d="M14.545 18.593l-3.287-3.342-1.424 1.404 4.697 4.772 8.037-7.99-1.41-1.418z" />
      </g>
    </svg>
  );
}

export default CheckEnclosed32;
