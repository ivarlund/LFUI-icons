import * as React from "react";

function Payment40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M13.5 28a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm23.794-4.708l1.412 1.416-11.835 11.8-5.546-5.08 1.35-1.474 4.138 3.788 10.48-10.45zM13.5 30a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM29.395 1.43l2.177 7.477.953.204-3.702 17.628-12.834-3.06a5.502 5.502 0 01-9.812-1.787L1.48 20.89 5.177 3.285l8.25 1.757L29.394 1.43zM6.722 5.66L3.848 19.348l2.194.468a5.501 5.501 0 1110.797 2.008l10.449 2.492 2.87-13.665-16.72-3.562-.283.065-.03-.132L6.721 5.66zM11.5 17a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM28.001 3.796l-9.906 2.24 11.256 2.398-1.35-4.638z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Payment40;
