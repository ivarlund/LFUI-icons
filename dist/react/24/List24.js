import * as React from "react";

function SvgList24(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g transform="translate(3 4)" fill="currentColor" fillRule="evenodd">
        <path fillRule="nonzero" d="M6 3h12V1H6zM6 9h12V7H6zM6 15h12v-2H6z" />
        <circle cx={2} cy={2} r={1.5} />
        <circle cx={2} cy={8} r={1.5} />
        <circle cx={2} cy={14} r={1.5} />
      </g>
    </svg>
  );
}

export default SvgList24;
