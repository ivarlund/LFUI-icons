import * as React from "react";

function Card20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16.697 14H3.317C3.156 14 3 13.846 3 13.727V8h13.997v5.76a.205.205 0 01-.062.15.32.32 0 01-.238.09zm0-9c.083 0 .17.038.233.103a.22.22 0 01.067.17V6H3v-.728C3 5.153 3.155 5 3.318 5h13.379zm2.299.305a2.175 2.175 0 00-.628-1.592A2.342 2.342 0 0016.697 3H3.317C2.063 3 1 4.04 1 5.272v8.455C1 14.96 2.062 16 3.318 16h13.379a2.31 2.31 0 001.675-.7 2.171 2.171 0 00.625-1.573l-.001-8.422z" />
        <path d="M3.996 11h4V9h-4z" />
      </g>
    </svg>
  );
}

export default Card20;
