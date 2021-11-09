import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ExternalLink32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M19 5v2h4.598l-8.235 8.296 1.42 1.408L25 8.427V13H27V5z" />
        <path d="M4 7v21h21V16h-2v10H6V9h10V7z" />
      </g>
    </svg>
  );
}

export default ExternalLink32;
