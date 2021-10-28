import * as React from "react";

function Forms32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M7 4v24h18l-.007-18.914L19.915 4H7zm2 2h10.085l3.908 3.915L23 26H9V6z" />
        <path d="M12 13h8v-2h-8zM12 17h8v-2h-8zM12 21h8v-2h-8z" />
      </g>
    </svg>
  );
}

export default Forms32;
