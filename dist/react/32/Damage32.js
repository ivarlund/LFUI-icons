import * as React from "react";

function Damage32(props) {
  return (
    <svg
      width={32}
      height={32}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M11 26v2H7v-2h4zm6-2.671l-4.808-2.314 1.177-3.398-2.296-1.474-1.988.957H2V26h3v2H0V0h24v28H13v-2h4v-2.671zM22 2H10v2.492l2.938.975.986 1.962h4.691v4.803L22 14.926V2zm0 24v-8.518l-5.385-4.286V9.43h-3.924l-1.168-2.324L8 5.936V2H2v13.1h6.629l2.584-1.243 4.561 2.926-1.109 3.202L19 22.071V26h3z"
          id="damage-32_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#damage-32_svg__a"
          transform="translate(4 2)"
        />
      </g>
    </svg>
  );
}

export default Damage32;
