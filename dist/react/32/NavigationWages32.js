import * as React from "react";

function NavigationWages32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M26 27.006H6.898C5.852 27.006 5 26.183 5 25.17V11.84c0-1.012.852-1.835 1.898-1.835h4.143l-2.144 2h-1.83v2H26v3h-3v2h4v3h-4v2h3v3zm-.32-16.978l-2.121 1.978h-11.73l8.395-7.83 5.456 5.852zM29 17.006h-1v-5h-1.508l2.014-1.88-8.183-8.776-7.137 6.656H6.898C4.749 8.006 3 9.726 3 11.84v13.33c0 2.115 1.749 3.835 3.898 3.835H28v-5h1v-7z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default NavigationWages32;
