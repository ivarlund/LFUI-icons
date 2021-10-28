import * as React from "react";

function ReportTransportation50({ title, titleId, ...props }) {
  return (
    <svg width={70} height={50} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="none">
        <path
          fill="#005AA0"
          d="M50 18v17h2V18zM66 32.832V40h-5v2h7v-9.632L60.956 18H53v2h6.709zM16.768 34.738l-1.911.587L16.907 42H20v-2h-1.615z"
        />
        <path
          d="M53 31V21h5.869l4.707 10H53zm2-2h5.424L57.6 23H55v6zM26 46a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 110-10 5 5 0 010 10zM55 46a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 110-10 5 5 0 010 10zM32 42h17v-2H32zM47 34H14v-5h-2v7h37V14H31v2h16z"
          fill="#005AA0"
        />
        <path
          fill="#005AA0"
          d="M22.375 9.807l-2.543 5.197-7.422-4.755 1.413 8.259-5.784.017 2.528 4.221-3.72 2.77 7.014 1.325.371-1.965-2.533-.478 1.513-1.128-1.65-2.755 4.631-.014-1.048-6.124 5.497 3.521 1.97-4.026 1.832 2.847 1.858-.823-.557 2.094 1.933.514 1.63-6.128-4.109 1.82zM5.476 19.318l-4.203-.692-.325 1.973 4.203.693zM23.01 7.931l.694-4.202-1.974-.326-.692 4.203zM8.859 11.317L5.284 8.976l-1.096 1.673 3.575 2.341z"
        />
        <path
          fill="#E30613"
          d="M15.127 7.686l-1.391-4.04-1.891.65 1.39 4.04z"
        />
      </g>
    </svg>
  );
}

export default ReportTransportation50;
