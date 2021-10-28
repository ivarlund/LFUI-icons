import * as React from "react";

function User40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M31 23c0 7.194-5.825 13-13 13-7.151 0-13-5.849-13-13 0-7.194 5.825-13 13-13 3.83 0 7.405 1.671 9.895 4.545l1.511-1.31C26.54 9.928 22.417 8 18 8 9.722 8 3 14.7 3 23c0 8.256 6.744 15 15 15 8.278 0 15-6.7 15-15 0-1.674-.272-3.322-.788-4.871l-.173-.472-.24-.655H21.282c-2.885 0-4.879-.76-6.185-2.002a5.08 5.08 0 01-1.003-1.307c-.132-.25-.199-.429-.218-.502l-1.934.512c.195.735.73 1.751 1.777 2.746 1.687 1.604 4.177 2.553 7.563 2.553h9.111C30.788 20.262 31 21.62 31 23z" />
        <path d="M13 22.61c0-.335.256-.61.5-.61s.5.275.5.61h2C16 21.2 14.881 20 13.5 20S11 21.2 11 22.61h2zM22 22.61c0-.335.256-.61.5-.61s.5.275.5.61h2C25 21.2 23.881 20 22.5 20S20 21.2 20 22.61h2zM22.305 27.894A6.176 6.176 0 0118 29.626a6.176 6.176 0 01-4.305-1.732l-1.39 1.439A8.175 8.175 0 0018 31.626a8.175 8.175 0 005.695-2.293l-1.39-1.439zM25.363 6.478l.87-4.062-1.956-.418-.87 4.062zM30.481 9.068l2.532-3.32-1.591-1.213-2.531 3.321zM33.395 13.643l3.719-1.946-.928-1.772-3.718 1.946z" />
      </g>
    </svg>
  );
}

export default User40;
