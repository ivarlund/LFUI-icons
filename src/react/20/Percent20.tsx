import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Percent20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M14.5 18a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM5.5 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM14.714 2.382l-11 14 1.572 1.236 11-14z" />
      </g>
    </svg>
  );
}

export default Percent20;
