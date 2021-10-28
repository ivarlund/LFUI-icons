import * as React from "react";

function WalletMinus32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M11 28c-3.86 0-7-3.092-7-6.893 0-3.801 3.14-6.893 7-6.893 3.823 0 6.936 3.035 6.995 6.786h-.009v.373C17.843 25.05 14.769 28 11 28zm18-17.005V6H10v2h17v2.995h-2.941v2H28V16h-3.941v2h2.983v3h-7.047c-.059-4.854-4.069-8.786-8.995-8.786-1.057 0-2.067.19-3.01.522V6.092c0-1.142.947-2.071 2.114-2.071L27.001 4l-.002-2-16.896.021c-2.268 0-4.113 1.826-4.113 4.071v7.632C3.585 15.322 2 18.035 2 21.107 2 26.011 6.038 30 11 30c4.305 0 7.909-3.003 8.79-7h9.252v-5H30v-7.005h-1z" />
        <path d="M7 20v2h8v-2z" />
      </g>
    </svg>
  );
}

export default WalletMinus32;
