import * as React from "react";

function Pin32(props) {
  return (
    <svg width={32} height={32} {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M8 12.796C8 8.496 11.579 5 15.978 5c4.398 0 7.976 3.497 7.976 7.796 0 2.015-.83 3.979-2.321 5.513l-5.655 5.54-5.639-5.524C8.831 16.774 8 14.81 8 12.795zm15.05 6.924c1.873-1.927 2.904-4.386 2.904-6.924C25.954 7.395 21.479 3 15.978 3 10.476 3 6 7.395 6 12.796c0 2.537 1.031 4.996 2.922 6.94L15.314 26H7v2h18v-2h-8.359l6.409-6.28z" />
        <path d="M15.977 14.913c-1.27 0-2.264-.956-2.264-2.177 0-1.22.995-2.177 2.264-2.177 1.27 0 2.264.957 2.264 2.177h2c0-2.343-1.872-4.177-4.263-4.177-2.392 0-4.265 1.834-4.265 4.177 0 2.342 1.873 4.177 4.265 4.177v-2z" />
      </g>
    </svg>
  );
}

export default Pin32;
