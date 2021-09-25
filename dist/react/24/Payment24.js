import * as React from "react";

function SvgPayment24(props) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path
          d="M8.828 16.014a2.982 2.982 0 110 5.964 2.982 2.982 0 010-5.964zm12.827-2.88l1.406 1.422-7.129 7.046-3.44-3.525 1.432-1.396 2.034 2.083 5.697-5.63zm-12.827 4.88a.982.982 0 100 1.964.982.982 0 000-1.964zM17.469.503l1.25 4.332 1.064.227-2.23 10.485-7.903-1.68a3.38 3.38 0 01-6.133-1.303L.866 12 3.094 1.514 8.04 2.565 17.47.503zM6.846 10.605a1.378 1.378 0 100 2.756 1.378 1.378 0 000-2.756zM4.634 3.886L3.237 10.46l.537.115a3.379 3.379 0 016.45 1.37l5.79 1.23 1.396-6.573L4.634 3.886zm11.433-1.029l-3.28.717 3.715.79-.435-1.507z"
          id="payment-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#payment-24_svg__a"
          transform="translate(0 1)"
        />
      </g>
    </svg>
  );
}

export default SvgPayment24;
