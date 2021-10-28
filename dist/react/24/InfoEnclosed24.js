import * as React from "react";

function InfoEnclosed24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12 19c-3.859 0-7-3.14-7-7 0-1.128.274-2.19.75-3.135C6.903 6.577 9.268 5 12 5s5.097 1.577 6.25 3.865c.476.945.75 2.007.75 3.135 0 3.86-3.141 7-7 7m6.25-13.462a8.96 8.96 0 00-12.5 0A8.97 8.97 0 003 12c0 4.962 4.037 9 9 9s9-4.038 9-9a8.97 8.97 0 00-2.75-6.462" />
        <path d="M11 10.8V17h2v-6.2zM12 6.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5" />
      </g>
    </svg>
  );
}

export default InfoEnclosed24;
