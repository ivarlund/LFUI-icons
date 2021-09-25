import * as React from "react";

function SvgPension24(props) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M17.686 16.4H4.314L3.416 18h15.168l-.898-1.6zm1.171-2L22 20H0l3.143-5.6h15.714zM15.374 8l3.143 5.6H3.496L6.639 8h8.735zm-1.171 2H7.809l-.897 1.6H15.1l-.898-1.6zM11.016.002L15.058 7.2H6.954L11.016.002zm-.006 3.027L9.596 5.61h2.82l-1.406-2.58z"
          id="pension-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#pension-24_svg__a"
          transform="translate(1 2)"
        />
      </g>
    </svg>
  );
}

export default SvgPension24;
