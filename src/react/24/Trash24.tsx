import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Trash24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M6 8l1 13h10l1-13H6zm2.174 2h7.652l-.666 9H8.84l-.666-9zM6 5v2h12V5zM10 5h4V3h-4z" />
      </g>
    </svg>
  );
}

export default Trash24;
