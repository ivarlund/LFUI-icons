import * as React from "react";

function SvgPencil32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M5 2.974v26h19v-10h-2v8H7v-22h15v-2z" />
        <path
          d="M26.364 7.228L16 17.592v1.415h1.414L27.778 8.643l-1.414-1.415zm-8.121 13.779H14v-4.243L26.364 4.4l4.243 4.243-12.364 12.364z"
          fillRule="nonzero"
        />
        <path d="M24.414 7.6l2.829 2.828-1.415 1.414L23 9.014z" />
      </g>
    </svg>
  );
}

export default SvgPencil32;
