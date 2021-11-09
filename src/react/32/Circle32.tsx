import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Circle32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={32}
      height={32}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M14 0c7.732 0 14 6.268 14 14s-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0zm0 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z"
          id="circle-32_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#circle-32_svg__a"
          transform="translate(2 2)"
        />
      </g>
    </svg>
  );
}

export default Circle32;
