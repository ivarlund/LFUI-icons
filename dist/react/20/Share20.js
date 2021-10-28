import * as React from "react";

function Share20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <path
          d="M15 1a3 3 0 11-1.911 5.313L7.94 9.402a3.014 3.014 0 010 1.196l5.149 3.09a3 3 0 11-1.03 1.716l-5.149-3.09a3 3 0 110-4.627l5.15-3.089A3 3 0 0115 1zm0 14a1 1 0 100 2 1 1 0 000-2zM5 9a1 1 0 100 2 1 1 0 000-2zm10-6a1 1 0 100 2 1 1 0 000-2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Share20;
