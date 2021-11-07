import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ShortcutFundAssortment50({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={50} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g strokeWidth={2} fill="none" fillRule="evenodd">
        <path stroke="#E30613" d="M7 22l11-11 4 4 16-7" />
        <path stroke="#005AA0" d="M7 28l8 2 10-6 13 3" />
        <path stroke="#005AA0" d="M4 4v33h41" />
      </g>
    </svg>
  );
}

export default ShortcutFundAssortment50;
