import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Paper32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M6 3v26h20V10.584l-7.586-7.585H6zm2 2h9v6.998h7V27H8V5zm11 1.413l3.585 3.585H19V6.414z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Paper32;
