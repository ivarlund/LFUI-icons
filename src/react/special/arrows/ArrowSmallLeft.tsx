import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ArrowSmallLeft({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={21} height={12} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="nonzero" fill="currentColor">
        <path d="M21 5H3v2h18z" />
        <path d="M7.279 1.76L5.865.346.208 6.003l5.657 5.657 1.414-1.415-4.243-4.242z" />
      </g>
    </svg>
  );
}

export default ArrowSmallLeft;
