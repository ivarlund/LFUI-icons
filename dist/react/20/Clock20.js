import * as React from "react";

function Clock20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M10 1c-4.961 0-9 4.039-9 9s4.039 9 9 9 9-4.039 9-9-4.039-9-9-9zm0 2c3.873 0 7 3.127 7 7s-3.127 7-7 7a6.99 6.99 0 01-7-7c0-3.873 3.127-7 7-7z" />
        <path d="M11 9.465l3.305 2.203-1.11 1.664L9 10.535V5h2z" />
      </g>
    </svg>
  );
}

export default Clock20;
