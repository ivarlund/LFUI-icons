import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function PensionCapital20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M14.619 14l1.058 2H4.32l1.059-2H3.118L1 18h18l-2.118-4zM16.352 13l-2.117-4h-8.47l-2.118 4zM10 1L6.293 8h7.412z" />
      </g>
    </svg>
  );
}

export default PensionCapital20;
