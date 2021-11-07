import * as React from "react";

function MulticolorThings48({ title, titleId, ...props }) {
  return (
    <svg width={48} height={48} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path
          d="M22.082 33.018h13.854M17 21.286V14a2 2 0 012-2h20a2 2 0 012 2v13a2 2 0 01-2 2H21.488L17 21.286z"
          stroke="#005C9C"
          strokeWidth={2}
        />
        <path
          d="M11.633 25l.583-1.963h5.038L17.807 25H18a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2h3.633z"
          stroke="#005C9C"
          strokeWidth={2}
        />
        <circle stroke="#E30613" strokeWidth={2} cx={14.7} cy={30} r={2} />
        <circle fill="#005C9C" cx={9} cy={28} r={1} />
        <path d="M29.036 29.043v3.997" stroke="#005C9C" strokeWidth={2} />
      </g>
    </svg>
  );
}

export default MulticolorThings48;
