import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ChevronLeft24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M14.186 17.6l1.414-1.414-4-4 4-4-1.414-1.414-4.001 4-1.413 1.415 1.413 1.413z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default ChevronLeft24;
