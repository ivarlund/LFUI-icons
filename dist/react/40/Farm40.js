import * as React from "react";

function Farm40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M23 2.677l15.655 13.567-1.31 1.512L36 16.588V34H38v2H2v-2h3.999v-2.806a5.51 5.51 0 01-2.62-1.22l-.207-.184a5.478 5.478 0 01-1.747-4.015c0-3.039 2.472-5.5 5.52-5.5a5.52 5.52 0 013.055.918L10 16.589l-1.344 1.167-1.31-1.512L23 2.677zm-13 27.68a5.51 5.51 0 01-2 .817L7.999 34h2zM23 5.323l-11.001 9.534L12 34h3.999L16 22h14l-.001 12H34l-.001-15H14v-2h19.999v-2.145L23 5.322zm2.499 26.279L24.5 34h1.999l-1-2.4zm-5 0L19.5 34h1.999l-1-2.4zm-2.5-6.002v6.8l1.417-3.4-1.417-3.4zm5.001 0L21.583 29l1.416 3.399 1.417-3.4L23 25.6zm4.999.003l-1.416 3.397 1.416 3.398v-6.795zM6.945 22.275c-1.945 0-3.52 1.568-3.52 3.5 0 .98.406 1.894 1.111 2.552a3.537 3.537 0 005.141-.344L10 27.62v-3.366l-.443-.823-.082-.089a3.513 3.513 0 00-2.307-1.06zM26.5 24H24.5l.999 2.399 1-2.4zm-5 0H19.5l.999 2.399 1-2.4zM23 9a5 5 0 015 5v1H18v-1a5 5 0 015-5zm0 2c-1.302 0-2.41.83-2.825 1.988L20.17 13h5.659l-.076-.193a3.002 3.002 0 00-2.577-1.802z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Farm40;
