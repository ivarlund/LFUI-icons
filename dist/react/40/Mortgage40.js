import * as React from "react";

function Mortgage40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M16 23.712l9 7.312V38h-2v-6.024l-7-5.688-7 5.688V38H7v-6.976l9-7.312zM19 33v5h-2v-3h-2v3h-2v-5h6zm12-10a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm-.883-22.49l3.162 14.624-5.285 1.115a5 5 0 01-9.463 1.995L7.883 22.49 4.721 7.866 30.117 2.51zM23 15a3 3 0 100 6 3 3 0 000-6zm5.583-10.122L7.1 9.408l2.316 10.714 8.593-1.811a5 5 0 019.682-2.043l3.207-.676-2.316-10.714z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Mortgage40;
