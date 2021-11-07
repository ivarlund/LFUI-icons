import * as React from "react";

function Wallet70({ title, titleId, ...props }) {
  return (
    <svg
      width={70}
      height={70}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M57.143 11v2H9a1 1 0 00-1 1v37a5 5 0 005 5h45V44h-8v-2h11a1 1 0 001-1V31a1 1 0 00-1-1H50v-2h8V18H13v-2h47v12h1a3 3 0 013 3v10a3 3 0 01-3 3h-1v14H13a7 7 0 01-7-7V14a3 3 0 013-3h48.143zM56 33a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z"
          id="wallet-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#wallet-70_svg__a"
        />
      </g>
    </svg>
  );
}

export default Wallet70;
