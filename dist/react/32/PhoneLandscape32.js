import * as React from "react";

function PhoneLandscape32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M28.152 19.91c0 4.231-2.19 6.534-6.235 6.713l.997.998-1.414 1.415-3.536-3.536 3.536-3.536 1.414 1.415-1.258 1.259c3.031-.057 4.424-1.493 4.493-4.49l.003-.239h2zM17.06 5.106a3 3 0 014.242 0l5.657 5.657a3 3 0 010 4.243l-12.02 12.02a3 3 0 01-4.243 0L5.04 21.371a3 3 0 010-4.243zm2.828 1.414a1 1 0 00-1.414 0L6.455 18.542a1 1 0 000 1.414l5.656 5.657a1 1 0 001.414 0l12.02-12.02a1 1 0 000-1.415zm-9.9 13.34a1.5 1.5 0 112.122 2.121 1.5 1.5 0 01-2.121-2.121zm.45-16.896l3.596 3.473-3.473 3.597-1.439-1.39 1.289-1.335c-3.092.084-4.486 1.544-4.502 4.57l.001.24-2 .034c-.073-4.225 2.07-6.565 6.1-6.82l-.962-.93 1.39-1.439z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default PhoneLandscape32;
