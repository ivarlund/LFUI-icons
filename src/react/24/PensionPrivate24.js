import * as React from "react";

function PensionPrivate24({ title, titleId, ...props }) {
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
          d="M17.686 16.4H4.314L3.416 18h15.168l-.898-1.6zm1.171-2L22 20H0l3.143-5.6h15.714zM15.374 8l3.143 5.6H3.496L6.639 8h8.735zm-1.171 2H7.809l-.897 1.6H15.1l-.898-1.6zM10.999.002L14.957 7.2H7.022L11 .002z"
          id="pension-private-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#pension-private-24_svg__a"
          transform="translate(1 2)"
        />
      </g>
    </svg>
  );
}

export default PensionPrivate24;
