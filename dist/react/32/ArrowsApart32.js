import * as React from "react";

function ArrowsApart32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M12 3.8L1.47 13 12 22.484v-5.5h10v-2.868L27.451 19 22 23.81v-2.825h-8v2h6v5.174L30.517 19 20 9.74v5.245H10v3.024L4.498 13 10 8.17v2.815h8v-2h-6z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default ArrowsApart32;
