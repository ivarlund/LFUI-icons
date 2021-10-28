import * as React from "react";

function Pregnant24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M16 19.5v2.503h-2V19.5h2zM12 2a4 4 0 013.285 6.283c.99.492 1.644 1.37 1.71 2.523L17 11v4.5c0 1.859-1.191 2.922-2.818 2.996L14 18.5h-4a1 1 0 01-.117-1.993L10 16.5h4c.64 0 .956-.23.996-.859L15 15.5V11c0-.6-.44-1.003-1.28-1.133a.998.998 0 01-.335-.114c-.431.16-.898.247-1.385.247-.618 0-1.203-.14-1.725-.39l.142-.067c-1.085.498-1.383.817-1.414 1.338l-.003.1v1.061c.235-.02.478-.034.728-.04L10 12v2c-2.824 0-4 .94-4 3 0 1.995 1.104 2.94 3.74 2.997L10 20v2c-3.843 0-6-1.726-6-5 0-2.288 1.054-3.82 3-4.535V10.98c0-1.184.513-2.044 1.667-2.768A4 4 0 0112 2zm0 2a2 2 0 100 4 2 2 0 000-4z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Pregnant24;
