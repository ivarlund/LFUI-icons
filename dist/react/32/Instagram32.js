import * as React from "react";

function Instagram32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M4 4v24h24V4H4zM2 2h28v28H2V2z" fillRule="nonzero" />
        <path d="M13.332 15.997a2.666 2.666 0 105.331.001 2.666 2.666 0 00-5.331 0z" />
        <path d="M19.286 11.715a1 1 0 112-.001 1 1 0 01-2 0zM11.892 16a4.108 4.108 0 118.216 0 4.108 4.108 0 01-8.216 0zm11.688-5.24a3.91 3.91 0 00-.923-1.417 3.92 3.92 0 00-1.417-.923c-.509-.198-1.09-.333-1.942-.372C18.445 8.009 18.173 8 16 8s-2.445.01-3.298.048c-.852.039-1.433.174-1.942.372a3.92 3.92 0 00-1.417.923c-.445.444-.718.89-.923 1.417-.198.508-.333 1.09-.372 1.942C8.009 13.555 8 13.827 8 16s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.205.526.478.972.923 1.417.445.445.89.718 1.417.923.509.198 1.09.333 1.942.371.853.04 1.125.048 3.298.048s2.445-.009 3.298-.048c.852-.038 1.433-.173 1.942-.371a3.925 3.925 0 001.417-.923c.445-.445.718-.89.923-1.417.198-.509.333-1.09.372-1.942.039-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.039-.852-.174-1.434-.372-1.942z" />
      </g>
    </svg>
  );
}

export default Instagram32;
