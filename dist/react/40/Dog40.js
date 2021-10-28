import * as React from "react";

function Dog40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M11 17v14h2V17z" />
          <path d="M8 36v-3a1 1 0 011-1h6v-2H9a3 3 0 00-3 3v5h22.346l.228-.684C29.522 34.473 30 32.08 30 30.125c0-5.361-2.646-10.73-7.873-16.096l-1.433 1.396c4.892 5.022 7.306 9.92 7.306 14.7 0 1.562-.365 3.524-1.102 5.875H8z" />
          <path d="M29 31c5.238 0 8-2.155 8-7h-2c0 3.617-1.773 5-6 5v2zM24.58 23.877A4.674 4.674 0 0021.858 23C19.16 23 17 25.302 17 28.11c0 2.187 1.32 4.12 3.266 4.83l.685-1.88C19.803 30.642 19 29.465 19 28.11 19 26.38 20.294 25 21.858 25c.563 0 1.1.176 1.562.506l1.16-1.63zM11.568 7l.29-.488c1.358-2.276 3.608-2.999 7.018-2.15 2.216.551 3.61 1.875 4.401 3.793.543 1.319.723 2.647.723 4.001C24 13.345 23.451 14 22.143 14c-1.378 0-1.857-.764-1.857-3.265h-2c0 3.467 1.13 5.265 3.857 5.265C24.642 16 26 14.379 26 12.156c0-1.592-.211-3.155-.874-4.763-1.02-2.477-2.898-4.258-5.767-4.972-3.98-.99-7.023-.136-8.904 2.579H4v4.196c0 4.7 5.145 7.701 9.666 5.546l-.861-1.806C9.579 14.475 6 12.387 6 9.196V7h5.568z" />
        </g>
      </g>
    </svg>
  );
}

export default Dog40;
