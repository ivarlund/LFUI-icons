import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Triangle32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M10 24.259l13.055-8.24L10 7.777v16.48zM8 4.15l18.802 11.868L8 27.886V4.15z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Triangle32;
