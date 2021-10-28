import * as React from "react";

function Chat32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M27.544 7.813C25.787 6.025 23.258 5 20.604 5h-9.162C6.172 5 2.024 8.951 2 14.004 2.024 19.132 5.947 23 11.125 23h1.44L19 29.407v-8.323h-2v3.508L13.393 21h-2.268C7.015 21 4.02 18.054 4 14.004 4.02 10.011 7.219 7 11.442 7h9.163c2.12 0 4.129.807 5.512 2.215 1.265 1.286 1.915 2.935 1.883 4.802.033 1.846-.65 3.576-1.922 4.871A7.154 7.154 0 0121 21v2a9.172 9.172 0 006.505-2.71A8.687 8.687 0 0030 14.017c.04-2.347-.831-4.55-2.456-6.204"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Chat32;
