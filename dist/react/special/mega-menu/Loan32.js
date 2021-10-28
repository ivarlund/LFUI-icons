import * as React from "react";

function Loan32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M26.125 13.521L23.753 2.725 4.918 6.893l2.457 10.794 8.23-1.962-.425-1.954-6.269 1.559-1.594-6.903L22.215 5.13l1.577 6.836-3.266.685.41 1.957z" />
        <path d="M22.5 14.25a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zm-5.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM27.5 20.25a3.25 3.25 0 10-6.5 0 3.25 3.25 0 006.5 0zm-4.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM20 23.188l-7-5.456-7 5.456V29h2v-4.73l5-3.997 5 3.997V29h2z" />
        <path d="M12 29h2v-4h-2z" />
      </g>
    </svg>
  );
}

export default Loan32;
