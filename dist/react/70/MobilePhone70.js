import * as React from "react";

function MobilePhone70({ title, titleId, ...props }) {
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
          d="M33 0a3 3 0 013 3v52a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h30zm1 46H2v9a1 1 0 001 1h30a1 1 0 001-1v-9zm-16 2a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zm16-40H2v34h32V10zm-1-8H3a1 1 0 00-1 1v5h32V3a1 1 0 00-1-1zM19 4a1 1 0 010 2h-6a1 1 0 010-2h6zm4 0a1 1 0 010 2h-1a1 1 0 010-2h1z"
          id="mobile-phone-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#mobile-phone-70_svg__a"
          transform="translate(17 6)"
        />
      </g>
    </svg>
  );
}

export default MobilePhone70;
