import * as React from "react";

function Share24(props) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M15 0a4 4 0 11-2.921 6.732l-4.2 2.291a4.008 4.008 0 010 1.954l4.2 2.29a4 4 0 11-.96 1.756l-4.198-2.29a4 4 0 110-5.465l4.2-2.291A4 4 0 0115 0zm0 14a2 2 0 100 4 2 2 0 000-4zM4 8a2 2 0 100 4 2 2 0 000-4zm11-6a2 2 0 100 4 2 2 0 000-4z"
          id="share-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#share-24_svg__a"
          transform="translate(2 2)"
        />
      </g>
    </svg>
  );
}

export default Share24;
