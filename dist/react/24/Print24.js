import * as React from "react";

function SvgPrint24(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M6 17H2v-5.5A3.5 3.5 0 015.5 8H6V2h12v6h.5a3.5 3.5 0 013.5 3.5V17h-4v5H6v-5zm0-2v-2h12v2h2v-3.5a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 004 11.5V15h2zm2-7h8V4H8v4zm0 7v5h8v-5H8z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgPrint24;
