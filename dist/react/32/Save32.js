import * as React from "react";

function Save32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M13.11 5.005c.14-.426.378-.819.703-1.147a2.872 2.872 0 014.094 0c.326.329.564.723.705 1.151l2.063.012a4.934 4.934 0 00-1.347-2.57 4.872 4.872 0 00-6.936 0 4.934 4.934 0 00-1.342 2.544l2.06.01zM26.125 16.079c0 2.548-.92 4.953-2.549 6.825l.83 6.096h-5.54l-1.035-2.762a10.148 10.148 0 01-3.928 0L12.87 29h-5.54l.829-6.096a10.365 10.365 0 01-2.549-6.825c0-1.77.442-3.478 1.27-4.993L5.652 5.445l5.982 1.205a10.138 10.138 0 014.234-.923c1.479 0 2.915.318 4.234.923l5.982-1.205-1.229 5.64a10.38 10.38 0 011.27 4.994zm-4.658 6.153l.333-.348a8.366 8.366 0 002.325-5.805 8.376 8.376 0 00-1.188-4.317l-.203-.34.743-3.412-3.646.735-.307-.155a8.14 8.14 0 00-3.657-.863 8.14 8.14 0 00-3.657.863l-.307.155-3.646-.735L9 11.422l-.203.34a8.378 8.378 0 00-1.188 4.317c0 2.196.843 4.256 2.325 5.805l.333.348L9.62 27h1.863l1.186-3.165.892.262a8.173 8.173 0 004.614 0l.892-.262L20.252 27h1.863l-.648-4.768z" />
        <path d="M17.98 18.546c0-1.19-.952-2.152-2.12-2.152-1.168 0-2.12.961-2.12 2.152 0 1.19.951 2.151 2.12 2.151s2.12-.961 2.12-2.151zm2 0c0 2.29-1.842 4.151-4.12 4.151s-4.12-1.86-4.12-4.151c0-2.29 1.842-4.152 4.12-4.152s4.12 1.861 4.12 4.152zM12.96 13.424c0-.102.078-.182.17-.182.092 0 .17.08.17.182h2c0-1.202-.97-2.182-2.17-2.182s-2.17.98-2.17 2.182h2zM18.42 13.424c0-.102.078-.182.17-.182.092 0 .17.08.17.182h2c0-1.202-.97-2.182-2.17-2.182s-2.17.98-2.17 2.182h2z" />
      </g>
    </svg>
  );
}

export default Save32;
