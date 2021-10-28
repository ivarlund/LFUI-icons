import * as React from "react";

function Contract24({ title, titleId, ...props }) {
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
          d="M16.016 0v4.011h-2V2H2v15.982h12.016V15.98h2v4.002H0V0h16.016zm.962 3.895l3.71 3.816-7.463 7.464h-3.85l-.027-3.727 7.63-7.553zm-1.732 4.527l-3.892 3.854.007.9h1.035l3.801-3.803-.951-.951zm1.705-1.686l-.638.631.945.945.622-.62-.93-.956zM5.67 12.78c.93.546.966 1.4.547 2.555.687-.914 1.042-1.222 1.734-1.222.509 0 .892.278 1.095.711.109.233.149.42.207.826.017.116.03.193.04.252h2.333v1.5h-2.58c-.505 0-.88-.282-1.077-.714-.103-.227-.14-.402-.198-.808a14.157 14.157 0 00-.01-.071c-.11.128-.269.323-.475.602a30.7 30.7 0 01-.174.236c-.726.967-1.226 1.37-2.045 1.115-.655-.204-.9-.767-.796-1.404.05-.31.103-.455.388-1.155.057-.14.095-.237.13-.332.214-.572.21-.746.12-.798-.413-.244-.74.18-1.009 2.223L2.414 16.1c.387-2.941 1.482-4.364 3.258-3.32zM11 6v2H3V6h8zm0-3v2H3V3h8z"
          id="contract-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#contract-24_svg__a"
          transform="translate(2 2)"
        />
      </g>
    </svg>
  );
}

export default Contract24;
