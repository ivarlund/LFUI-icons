import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ChevronRight24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M10.014 6.6L8.6 8.014l4 4-4 4 1.414 1.414 4.001-4 1.413-1.415-1.413-1.413z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default ChevronRight24;
