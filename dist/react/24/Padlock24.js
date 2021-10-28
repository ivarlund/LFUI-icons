import * as React from "react";

function Padlock24({ title, titleId, ...props }) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M12.456 6.948a4 4 0 10-8 0v2h-2v-2a6 6 0 1112 0v2h2v11.974h-16V8.948h12v-2zm2 4h-12v7.974h12v-7.974zm-6 1a1.5 1.5 0 011.157 2.456L11 18H6l1.307-3.588a1.5 1.5 0 011.15-2.464z"
          id="padlock-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#padlock-24_svg__a"
          transform="translate(3.544 1.052)"
        />
      </g>
    </svg>
  );
}

export default Padlock24;
