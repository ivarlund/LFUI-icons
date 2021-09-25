import * as React from "react";

function SvgTriangle20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path
        d="M6 5.75v8.509l7.025-4.255L6 5.75zM4 2.2l12.886 7.804L4 17.808V2.2z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgTriangle20;
