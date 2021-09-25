import * as React from "react";

function SvgSpecialGlobe20(props) {
  return (
    <svg width={19} height={19} {...props}>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="80.758%"
          id="special_globe-20_svg__a"
        >
          <stop stopColor="#0578B5" offset="0%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <g transform="translate(.75 .717)">
          <circle
            fill="url(#special_globe-20_svg__a)"
            cx={9}
            cy={9.033}
            r={9}
          />
          <circle stroke="#035F8C" cx={9} cy={9.033} r={7} />
          <path
            d="M2 9.033h14M9 2.033v14M9 16.033c-2.31-1.36-3.464-3.694-3.464-7 0-3.307 1.155-5.64 3.464-7M9 16.033c2.31-1.36 3.464-3.694 3.464-7 0-3.307-1.155-5.64-3.464-7"
            stroke="#035F8C"
          />
          <path
            d="M3.487 13.28c1.36-1.132 3.198-1.697 5.513-1.697 2.357 0 4.22.586 5.588 1.76M3.438 4.758C4.803 5.918 6.658 6.497 9 6.497c2.383 0 4.26-.6 5.632-1.8"
            stroke="#035F8C"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgSpecialGlobe20;
