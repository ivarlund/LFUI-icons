import * as React from "react";

function SvgRv32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M10 20a3 3 0 110 6 3 3 0 010-6zm13 0a3 3 0 110 6 3 3 0 010-6zm4.72-13l3.334 10-2.333 7H27v-2h.279l1.667-5.001L26.279 9H4.802l-1.555 6.999L6 16v2l-2.613-.001L4.72 22H6v2H3.28L.963 17.053 3.198 7H27.72zM10 22a1 1 0 100 2 1 1 0 000-2zm13 0a1 1 0 100 2 1 1 0 000-2zm-4 0v2h-5v-2h5zm0-11v10h-2v-8h-1v8h-2V11h5zm6.641 0l1.677 6H21v-6h4.641zm-1.518 2H23v2h1.682l-.559-2zM12 11v4h-2v-2H8v2H6v-4h6z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgRv32;
