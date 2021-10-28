import * as React from "react";

function Attach20({ title, titleId, ...props }) {
  return (
    <svg
      width={16}
      height={18}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M6.846 13.19c1.18 2.204 2.534 2.745 4.434 1.858 1.901-.886 2.357-2.27 1.45-4.54L9.65 3.904l1.812-.845 3.102 6.654c1.307 3.261.475 5.79-2.438 7.148-2.913 1.358-5.385.37-7.067-2.776L1.182 5.772l-.04-.102C.457 3.654 1.207 2.01 3.2 1.082 5.188.155 6.932.628 8.058 2.432l.058.106 3.876 8.313.045.112c.468 1.432.087 2.636-1.16 3.218-1.248.582-2.416.1-3.213-1.177l-.058-.107-3.08-6.604 1.813-.845 3.053 6.546c.28.439.406.483.639.375.233-.109.279-.233.122-.73L6.331 3.443c-.572-.886-1.216-1.047-2.286-.548-1.068.499-1.35 1.085-1.026 2.085l3.827 8.211z"
          id="attach-20_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M-2-1h20v20H-2z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#attach-20_svg__a"
        />
      </g>
    </svg>
  );
}

export default Attach20;
