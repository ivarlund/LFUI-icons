import * as React from "react";

function Damage24({ title, titleId, ...props }) {
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
          d="M2 18h2v2H0V0h18v20h-7v-2h5V2H2v16zm7 0v2H6v-2h3zM7.925 9.865l3.717 2.312-.823 2.302L14 15.963V18h-2v-.763L8.323 15.52l.893-2.498-1.427-.888-1.424.665H2v-2h3.921l2.004-.935zM7 2v.854l2.252.76.754 1.529h3.763v3.952l2.224 1.79.004 2.542-4.228-3.379V7.143H8.763l-.988-1.914L5 4.289V2h2z"
          id="damage-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#damage-24_svg__a"
          transform="translate(3 2)"
        />
      </g>
    </svg>
  );
}

export default Damage24;
