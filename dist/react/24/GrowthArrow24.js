import * as React from "react";

function GrowthArrow24(props) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M22 5v6h-2l-.001-2.605-6.82 6.743-3.4-3.269-6.086 5.852-1.386-1.442 7.472-7.184 3.38 3.25L18.565 7H16V5h6z"
          id="growth-arrow-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#growth-arrow-24_svg__a"
        />
      </g>
    </svg>
  );
}

export default GrowthArrow24;
