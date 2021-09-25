import * as React from "react";

function SvgPlus32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <path
        fill="currentColor"
        d="M15 8v7H8v2h7v7h2v-7h7v-2h-7V8z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlus32;
