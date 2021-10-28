import * as React from "react";

function Clock24(props) {
  return (
    <svg width={24} height={24} {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12 3c-4.961 0-9 4.039-9 9s4.039 9 9 9 9-4.039 9-9-4.039-9-9-9zm0 2c3.873 0 7 3.127 7 7s-3.127 7-7 7a6.99 6.99 0 01-7-7c0-3.873 3.127-7 7-7z" />
        <path d="M13 11.465l3.305 2.203-1.11 1.664L11 12.535V7h2z" />
      </g>
    </svg>
  );
}

export default Clock24;
