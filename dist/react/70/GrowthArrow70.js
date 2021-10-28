import * as React from "react";

function GrowthArrow70(props) {
  return (
    <svg
      width={70}
      height={70}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M63.998 15L64 31h-2l-.003-12.615-23.352 22.934L28.09 31.237 7.69 50.723l-1.38-1.446L28.09 28.47l10.536 10.064L60.554 17H48v-2h15.998z"
          id="growth-arrow-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#growth-arrow-70_svg__a"
        />
      </g>
    </svg>
  );
}

export default GrowthArrow70;
