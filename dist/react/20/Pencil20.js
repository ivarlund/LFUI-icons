import * as React from "react";

function Pencil20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M2 1v18h14.001l-.007-6.001-2 .002.005 4H4v-14h9V1z" />
        <path d="M16.432 6.317l-.739-.739L10 11.272v.739h.739l5.693-5.694zm-4.865 7.694H8v-3.568l7.693-7.693 3.568 3.567-7.694 7.694z" />
      </g>
    </svg>
  );
}

export default Pencil20;
