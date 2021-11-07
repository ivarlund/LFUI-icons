import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Trailer32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M10 16a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zm20-6v3h-2v-1h-5.001L23 20h-9v-2l6.999-.001V14H20v-.001H4.999v4L6 18v2H3l-.001-5H2v-3h28z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Trailer32;
