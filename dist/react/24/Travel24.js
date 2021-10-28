import * as React from "react";

function Travel24({ title, titleId, ...props }) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M17.664 11.26l3.599.752.102.563c.192 1.048-.227 1.95-1.158 2.568l-.11.072-4.377 1.248-2.819 3.044-4.168 1.326.628-2.51h-5.05L.313 14.656l4.433-1.291 1.991 1.114.872-.257-1.369-1.21 3.397-.996 3.295.638 4.732-1.393zm.07 1.752l-11.202 3.3-1.994-1.116-.85.248 1.285 1.18h4.014l.912-.448.04-.02.016.03 1.594.399-.426 1.703.835-.265 2.838-3.065 4.57-1.302c.11-.083.191-.165.247-.252l-1.878-.392zm-8.039.237l-1.032.303.304.27 1.462-.431-.734-.142zm3.75-4.087a1.428 1.428 0 110 2.856 1.428 1.428 0 010-2.856zm0 1a.428.428 0 100 .856.428.428 0 000-.856zm-4.33-4.344a2.297 2.297 0 110 4.594 2.297 2.297 0 010-4.594zM7.475 0c1.72 0 3.167 1.17 3.59 2.757a3.376 3.376 0 012.317 5.137l-1.69-1.07a1.375 1.375 0 00-1.163-2.11h-1.34v-1a1.714 1.714 0 00-3.429 0v1.003l-1.002-.003a1.37 1.37 0 00-1.373 1.372c0 .76.616 1.376 1.375 1.376h1.304v2H4.76a3.375 3.375 0 01-.894-6.629A3.716 3.716 0 017.475 0zm1.64 7.318a.797.797 0 100 1.594.797.797 0 000-1.594z"
          id="travel-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#travel-24_svg__a"
          transform="translate(.59 1.403)"
        />
      </g>
    </svg>
  );
}

export default Travel24;
