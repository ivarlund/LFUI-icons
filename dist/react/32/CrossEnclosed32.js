import * as React from "react";

function CrossEnclosed32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" />
        <path d="M20.364 10.222L16 14.586l-4.364-4.364-1.414 1.414L14.586 16l-4.375 4.375 1.414 1.414L16 17.414l4.364 4.364 1.414-1.414L17.414 16l4.364-4.364z" />
      </g>
    </svg>
  );
}

export default CrossEnclosed32;
