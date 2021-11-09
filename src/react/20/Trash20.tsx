import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Trash20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M4 6l1 12h10l1-12H4zm2.174 2h7.652l-.666 8H6.84l-.666-8zM11.846 3H4v2h12V3zM8 3h4V1H8z" />
      </g>
    </svg>
  );
}

export default Trash20;
