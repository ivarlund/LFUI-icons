import * as React from "react";

function Heart24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M8.127 6.515c-.809 0-1.618.3-2.22.902A3.115 3.115 0 005 9.637c0 .848.322 1.636.907 2.22L12 17.952l6.093-6.093A3.112 3.112 0 0019 9.638c0-.847-.322-1.636-.907-2.221-1.204-1.204-3.238-1.203-4.441 0L12 9.072l-1.652-1.654a3.135 3.135 0 00-2.221-.902zM12 20.779l-7.507-7.507A5.097 5.097 0 013 9.638a5.1 5.1 0 011.493-3.635 5.147 5.147 0 017.269 0l.238.239.238-.24a5.146 5.146 0 017.269 0A5.1 5.1 0 0121 9.639c0 1.38-.53 2.672-1.493 3.634L12 20.779z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Heart24;
