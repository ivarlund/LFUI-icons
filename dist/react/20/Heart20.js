import * as React from "react";

function Heart20({ title, titleId, ...props }) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M6.127 4.015c-.809 0-1.618.3-2.22.902A3.115 3.115 0 003 7.137c0 .848.322 1.636.907 2.22L10 15.452l6.093-6.093A3.112 3.112 0 0017 7.138c0-.847-.322-1.636-.907-2.221-1.204-1.204-3.238-1.203-4.441 0L10 6.572 8.348 4.917a3.135 3.135 0 00-2.221-.902zM10 18.279l-7.507-7.507A5.097 5.097 0 011 7.138a5.1 5.1 0 011.493-3.635 5.147 5.147 0 017.269 0l.238.239.238-.24a5.146 5.146 0 017.269 0A5.1 5.1 0 0119 7.139c0 1.38-.53 2.672-1.493 3.634L10 18.279z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Heart20;
