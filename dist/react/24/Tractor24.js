import * as React from "react";

function Tractor24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M7.309 13.735a4.074 4.074 0 110 8.147 4.074 4.074 0 010-8.147zM15.8 2a3.235 3.235 0 013.226 2.988l.01.247L19.034 9h1.968v7.311a3.235 3.235 0 11-2-.89L19.003 11h-4.501l-3.05-5.883h-6.51v5.76a7.252 7.252 0 019.432 5.516l.04.237-1.975.307a5.251 5.251 0 00-9.678-1.91l-.119.207-1.754-.96a7.264 7.264 0 012.053-2.355l.001-8.801h9.726L15.717 9h1.318V5.235a1.236 1.236 0 00-1.094-1.227L15.8 4V2zM7.309 15.735a2.074 2.074 0 100 4.147 2.074 2.074 0 000-4.147zm11.456 1.677a1.235 1.235 0 100 2.47 1.235 1.235 0 000-2.47z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Tractor24;
