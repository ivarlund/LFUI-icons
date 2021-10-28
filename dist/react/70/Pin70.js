import * as React from "react";

function Pin70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M35 6.085c13.76 0 24 9.531 24 23.379 0 11.495-7.865 22.333-23.452 32.532l-.007.003L53 62v2H17v-2h17.458l-.005-.004C18.865 51.806 11 40.966 11 29.464 11 15.616 21.24 6.085 35 6.085zm0 2c-12.687 0-22 8.669-22 21.379 0 10.578 7.288 20.75 22 30.498 14.712-9.756 22-19.928 22-30.498 0-12.71-9.313-21.379-22-21.379zM35 23a7 7 0 017 7h-2a5 5 0 10-5 5v2a7 7 0 010-14z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Pin70;
