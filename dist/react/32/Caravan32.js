import * as React from "react";

function Caravan32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M15 19a3 3 0 110 6 3 3 0 010-6zM26.744 6l3.314 11.047L28.477 21 30 21v2l-2.323-.001V23H19v-2h7.322l1.619-4.048L25.256 8H5.496l-1.465 8.887L5.677 21H11v2H4.323l-2.355-5.887L3.798 6h22.946zM15 21a1 1 0 100 2 1 1 0 000-2zm-4-11v10H9v-8.001H8V20H6V10h5zm7 6v2h-4v-2h4zm4-6v5h-8v-5h8zm-2 2h-4v1h4v-1z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Caravan32;
