import * as React from "react";

function Thumbup20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <path
          d="M9.826 1.333a1 1 0 011.293-.17c.515.338.925.926 1.296 1.767a1 1 0 01.047.677l-1.03 3.615H18a1 1 0 011 1v2.667a1 1 0 01-.09.416l-3.25 7.11a1 1 0 01-.91.585H5a1 1 0 01-1-1V8.222a1 1 0 01.255-.667zM1.011 18.99l.005-5.492.006-5.5 2 .008-.011 10.992H3l-1.989-.008zm9.328-15.231L6 8.605V17h8.108L17 10.671V9.222h-6.893a1 1 0 01-.962-1.274l1.194-4.19zm.2-.7l-.104.362c.024.047.049.096.073.148l.37-.413-.34-.097z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Thumbup20;
