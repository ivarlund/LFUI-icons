import * as React from "react";

function SvgMobilePhone24(props) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M14 17a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h8a3 3 0 013 3v14zm-2-3.5H2V17a1 1 0 001 1h8a1 1 0 001-1v-3.5zM7 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5-9.5H2v8h10v-8zM11 2H3a1 1 0 00-1 1v.5h10V3a1 1 0 00-1-1z"
          id="mobile-phone-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#mobile-phone-24_svg__a"
          transform="translate(5 2)"
        />
      </g>
    </svg>
  );
}

export default SvgMobilePhone24;
