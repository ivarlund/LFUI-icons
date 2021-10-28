import * as React from "react";

function NotificationSwish20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M7.041 17.452l.341-.42c2.318.652 4.869-.193 6.425-2.095 2.082-2.558 1.725-6.424-.892-8.566l-.476-.357 2.164-2.535.438.329C16.904 5.288 18 7.534 18 10c0 4.438-3.562 8-8 8a8.063 8.063 0 01-2.959-.548zm-2.027-1.205A8.002 8.002 0 012 10c0-4.438 3.562-8 8-8 1.151 0 2.246.219 3.233.712l-.361.398c-2.488-.774-5.122-.068-6.739 1.952-2.082 2.618-1.665 6.366.952 8.567l.476.357-2.164 2.589-.383-.328z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default NotificationSwish20;
