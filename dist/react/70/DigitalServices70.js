import * as React from "react";

function DigitalServices70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M52.956 12c1.616 0 2.946 1.244 3.039 2.823L56 15v20h3a3 3 0 012.995 2.824L62 38v17a3 3 0 01-2.824 2.995L59 58h-8a3 3 0 01-2.995-2.824L48 55V44H35v8h8v2H21v-2h8v-8H11.044c-1.625 0-2.946-1.124-3.039-2.693L8 41.131V15c0-1.602 1.272-2.904 2.866-2.995l.178-.005h41.912zM59 37h-8a1 1 0 00-.993.883L50 38v17a1 1 0 00.883.993L51 56h8a1 1 0 00.993-.883L60 55V38a1 1 0 00-1-1zm-4 15a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-22-8h-2v8h2v-8zm15-5H10v2.131c0 .464.358.816.913.863l.131.006H48v-3zm6-21H10v19h38.17a3.002 3.002 0 012.654-1.995L51 35h3V18zm-35.707 2.293l1.414 1.414-5 5-1.414-1.414 5-5zm-3-1l1.414 1.414-3 3-1.414-1.414 3-3zM52.956 14H11.044c-.542 0-.982.394-1.038.892L10 15v1h44v-1c0-.51-.403-.94-.93-.994L52.956 14z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default DigitalServices70;
