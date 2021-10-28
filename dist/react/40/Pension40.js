import * as React from "react";

function Pension40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M25 9h-3v2h3zM38 9h-3v2h3zM31 5V2h-2v3zM31 18v-3h-2v3zM34.243 7.172l2.121-2.122-1.414-1.414-2.122 2.121zM25.05 16.364l2.122-2.121-1.415-1.415-2.121 2.122zM32.828 14.243l2.122 2.121 1.414-1.414-2.121-2.122zM23.636 5.05l2.121 2.122 1.415-1.415-2.122-2.121zM32 10a2 2 0 10-4 0 2 2 0 004 0zm2 0a4 4 0 11-8 0 4 4 0 018 0zM17 19.789l2-.002c0 .353.738 1.214 1.229 1.213l2.539.008c.1 0 .238-.149.238-.307v-1.117L14 14.5l-9 5.084v1.222c0 .141.052.194.17.194h2.58c.501-.001 1.244-.85 1.25-1.208l2 .015c0 .341.745 1.194 1.238 1.193h3.512c.49-.002 1.25-.874 1.25-1.211zM15.754 23H12.24c-.832.002-1.642-.449-2.244-1.074-.602.623-1.41 1.072-2.244 1.074h-2.58c-1.237.003-2.171-.96-2.173-2.192v-2.392l11-6.212 11.004 6.212v.583l.002 1.7c.001 1.23-.994 2.306-2.239 2.309L20.228 23c-.833.002-1.639-.451-2.237-1.08-.604.625-1.412 1.078-2.237 1.08z" />
        <path d="M13 23v11h2V23z" />
        <path d="M37 35c-2.16 0-3.183-.387-5.175-1.646-2.283-1.441-3.638-1.954-6.243-1.954-2.606 0-3.963.512-6.253 1.954-2 1.258-3.027 1.646-5.188 1.646H3v2h11.141c2.606 0 3.963-.512 6.253-1.953 2-1.26 3.027-1.647 5.188-1.647 2.159 0 3.182.387 5.175 1.645C33.04 36.487 34.395 37 37 37v-2z" />
      </g>
    </svg>
  );
}

export default Pension40;
