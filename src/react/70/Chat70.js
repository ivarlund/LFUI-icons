import * as React from "react";

function Chat70({ title, titleId, ...props }) {
  return (
    <svg
      width={70}
      height={70}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M35 58.199V49h2v14.801L26.526 51H25C14.507 51 6 42.493 6 32s8.507-19 19-19h20c10.493 0 19 8.507 19 19s-8.507 19-19 19h-6v-2h6c9.389 0 17-7.611 17-17s-7.611-17-17-17H25c-9.389 0-17 7.611-17 17s7.611 17 17 17h2.474L35 58.199z"
          id="chat-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#chat-70_svg__a"
        />
      </g>
    </svg>
  );
}

export default Chat70;
