import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ExternalLink24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M15 3v2h2.586l-5.293 5.294 1.414 1.414L19 6.415V9h2V3z" />
        <path d="M3 4v17h17.001l-.007-9.001-2 .002.005 7H5V6h7V4z" />
      </g>
    </svg>
  );
}

export default ExternalLink24;
