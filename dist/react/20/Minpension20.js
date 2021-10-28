import * as React from "react";

function Minpension20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M18.935 8.836l-6.054 6.132-.792-.17 2.376-6.814-5.657 6.984-.793-.227 2.15-7.154-6.336 7.381-.566-.454L5.98 7.19l-4.922 4.713C1.962 15.934 5.583 19 9.882 19c4.98 0 9.053-4.032 9.053-8.972.113-.397.056-.795 0-1.192zm-13.409 2.84l5.77-6.928.736.284-2.093 6.984 5.77-7.212.736.284-2.489 7.382 4.752-4.997C17.633 3.726 14.126 1 10.052 1 5.073 1 1 5.032 1 9.972c0 .17 0 .397.057.567l6.166-5.791.736.227-2.433 6.7z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Minpension20;
