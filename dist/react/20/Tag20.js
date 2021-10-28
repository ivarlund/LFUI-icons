import * as React from "react";

function Tag20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M3.414 11.004L9 16.59l8.004-8.003L17 5.419l-2.415-2.415L11.418 3l-8.004 8.003zm5.586 8a.997.997 0 01-.707-.293l-7-7a.999.999 0 010-1.414l9.004-9.004A1 1 0 0111.004 1h.001l3.996.004c.265 0 .518.105.706.293l3 3a1 1 0 01.293.706l.004 3.996c0 .266-.106.52-.293.708L9.707 18.71a.997.997 0 01-.707.293z" />
        <path d="M13 8.5c-.484 0-.87-.194-1.161-.532a1.046 1.046 0 01-.242-.388C11.5 7.388 11.5 7.194 11.5 7c0-.823.677-1.5 1.5-1.5s1.5.677 1.5 1.5-.677 1.5-1.5 1.5" />
      </g>
    </svg>
  );
}

export default Tag20;
