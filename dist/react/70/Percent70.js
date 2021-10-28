import * as React from "react";

function Percent70({ title, titleId, ...props }) {
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
          d="M41.155.466l1.69 1.068-36 57-1.69-1.068 36-57zM37.5 37C43.299 37 48 41.701 48 47.5S43.299 58 37.5 58 27 53.299 27 47.5 31.701 37 37.5 37zm0 2a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-27-39C16.299 0 21 4.701 21 10.5S16.299 21 10.5 21 0 16.299 0 10.5 4.701 0 10.5 0zm0 2a8.5 8.5 0 100 17 8.5 8.5 0 000-17z"
          id="percent-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#percent-70_svg__a"
          transform="translate(11 6)"
        />
      </g>
    </svg>
  );
}

export default Percent70;
