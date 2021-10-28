import * as React from "react";

function Accont32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M28 15h-1v-5H9.067v2H25v3h-3v2h4v2h-4v2h3v3H8.898C7.852 24 7 23.177 7 22.165V9.835C7 8.823 7.852 8 8.898 8H25V6H8.898C6.749 6 5 7.721 5 9.835v12.33C5 24.279 6.749 26 8.898 26H27v-5h1v-6z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Accont32;
