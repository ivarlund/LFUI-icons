import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Trailer24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M17 15h-6.171a3.001 3.001 0 01-5.658.001L2 15V8h20v3h-2l-.001-1H17v5zm-9-2a1 1 0 100 2 1 1 0 000-2zm-4-3v3h1.17a3.001 3.001 0 015.66 0H15v-3H4z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Trailer24;
