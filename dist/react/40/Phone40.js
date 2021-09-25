import * as React from "react";

function SvgPhone40(props) {
  return (
    <svg width={40} height={40} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M11 6.319C11 5.628 11.625 5 12.308 5h15.384C28.375 5 29 5.628 29 6.319V33.68c0 .691-.624 1.319-1.308 1.319H12.308A1.31 1.31 0 0111 33.681V6.32zM12.308 37h15.384C29.482 37 31 35.474 31 33.681V6.32C31 4.525 29.482 3 27.692 3H12.308C10.518 3 9 4.525 9 6.319V33.68A3.31 3.31 0 0012.308 37z"
          fillRule="nonzero"
        />
        <path fillRule="nonzero" d="M29 12v-2H11v2zM29 30v-2H11v2z" />
        <path d="M21.5 32.499a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001z" />
      </g>
    </svg>
  );
}

export default SvgPhone40;
