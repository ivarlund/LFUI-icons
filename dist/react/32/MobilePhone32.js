import * as React from "react";

function MobilePhone32(props) {
  return (
    <svg
      width={32}
      height={32}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M15 0a3 3 0 013 3v22a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h12zm1 21H2v4a1 1 0 001 1h12a1 1 0 001-1v-4zm-7 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM2 6v13h14V6H2zm0-2h14V3a1 1 0 00-1-1H3a1 1 0 00-1 1v1z"
          id="mobile-phone-32_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#mobile-phone-32_svg__a"
          transform="translate(7 2)"
        />
      </g>
    </svg>
  );
}

export default MobilePhone32;
