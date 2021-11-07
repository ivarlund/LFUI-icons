import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Check24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M16.907 6.6l-6.64 6.614-2.943-2.98L5.9 11.637l4.353 4.41 8.063-8.03z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Check24;
