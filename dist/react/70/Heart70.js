import * as React from "react";

function Heart70({ title, titleId, ...props }) {
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
          d="M35 57.605l23.153-22.52c.084-.083.168-.166.25-.25 4.902-5.04 4.79-13.1-.25-18.002-5.245-5.102-13.598-5.102-18.843 0L35 21.025l-4.31-4.192c-5.245-5.102-13.598-5.102-18.843 0a12.73 12.73 0 00-.25.25c-4.902 5.04-4.79 13.1.25 18.001L35 57.605zm0-39.37l2.915-2.835c6.022-5.857 15.611-5.857 21.633 0 5.831 5.672 5.96 14.998.288 20.83a14.73 14.73 0 01-.288.288L35 60.395 10.452 36.518c-5.831-5.672-5.96-14.998-.288-20.83.095-.097.19-.194.288-.288 6.022-5.857 15.611-5.857 21.633 0L35 18.235z"
          id="heart-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#heart-70_svg__a"
        />
      </g>
    </svg>
  );
}

export default Heart70;
