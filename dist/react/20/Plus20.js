import * as React from "react";

function Plus20(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path
        d="M9 4v5H4v2h5v5h2.001v-5H16V9h-4.999V4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Plus20;
