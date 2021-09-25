import * as React from "react";

function SvgBell32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M14 26a2 2 0 104 0h2a4 4 0 11-8 0zm2-24a2 2 0 012 2v.13c4.584.636 7 3.582 7 8.62v7.378L27.517 26H4.483L7 20.128V12.75c0-5.037 2.416-7.983 6.999-8.62L14 4a2 2 0 012-2zm0 4c-4.788 0-7 2.143-7 6.75v6.75h12.004v2H8.587L7.517 24h16.966L23 20.539V12.75C23 8.143 20.788 6 16 6z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgBell32;
