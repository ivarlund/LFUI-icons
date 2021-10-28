import * as React from "react";

function Car24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M11.998 2c2.418-.001 4.13.212 5.294.605.939.318 1.59.785 1.935 1.384L21.733 8H23a1 1 0 010 2h-.673l.721 2.758-.004.271L23 18.5c0 1.666-1.392 3-3 3-1.439 0-2.707-1.095-2.956-2.499l-10.086.004A3.009 3.009 0 014 21.5c-1.632 0-3-1.14-3-3v-5.746L1.688 10H1a1 1 0 010-2h1.265l2.509-4.012c.346-.6 1-1.067 1.944-1.384C7.881 2.214 9.588 2 11.998 2zM12 4c-5.063.003-5.5 1-5.5 1L4 9l-1 4v1h12v2H3v2.5c0 .75.5 1 1 1s1-.406 1-1V17h14v1.5c0 .531.5 1 1 1s1-.438 1-1l.02-2.5H16v-2h5.036l.008-1L20 9l-2.5-4s-.438-1.003-5.5-1zm-5.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-1.227-4.957L18.29 9H7V7h8.026l-.535-1.049 1.782-.908z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Car24;
