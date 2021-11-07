import * as React from "react";

function Padlock70({ title, titleId, ...props }) {
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
          d="M23 0c9.948 0 18 8.29 18 18.5V26h5v32H0V26h5v-7.5C5 8.29 13.052 0 23 0zm21 28H2v28h42V28zm-21 4a5 5 0 014.026 7.966L30.346 51h-14.69l3.315-11.038A5 5 0 0123 32zm0 2a3 3 0 00-2.188 5.052l.394.42L18.345 49h9.31l-2.865-9.524.395-.42A3 3 0 0023 34zm0-32C14.17 2 7 9.38 7 18.5V26h5v-7.2C12 12.3 16.907 7 23 7s11 5.3 11 11.8V26h5v-7.5C39 9.38 31.83 2 23 2zm0 7c-4.953 0-9 4.371-9 9.8V26h18v-7.2c0-5.429-4.047-9.8-9-9.8z"
          id="padlock-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#padlock-70_svg__a"
          transform="translate(12 6)"
        />
      </g>
    </svg>
  );
}

export default Padlock70;
