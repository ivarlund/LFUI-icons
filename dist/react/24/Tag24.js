import * as React from "react";

function Tag24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M5.414 13.004L11 18.59l8.004-8.003L19 7.419l-2.415-2.415-3.167-.003-8.004 8.003zm5.586 8a.997.997 0 01-.707-.293l-7-7a.999.999 0 010-1.414l9.004-9.004A1 1 0 0113.004 3h.001l3.996.004c.265 0 .518.105.706.293l3 3a1 1 0 01.293.706l.004 3.996c0 .266-.106.521-.293.708l-9.004 9.004a.997.997 0 01-.707.293z" />
        <path d="M15 11a1.961 1.961 0 01-1.548-.71 1.395 1.395 0 01-.323-.516C13 9.516 13 9.258 13 9c0-1.097.903-2 2-2s2 .903 2 2-.903 2-2 2" />
      </g>
    </svg>
  );
}

export default Tag24;
