import * as React from "react";

function SvgClock32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M16 3C8.834 3 3 8.834 3 16s5.834 13 13 13 13-5.834 13-13S23.166 3 16 3zm0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16 9.913 5 16 5z" />
        <path d="M22.08 19.796l-1.285 1.533L15 16.466V8h2v7.534z" />
      </g>
    </svg>
  );
}

export default SvgClock32;
