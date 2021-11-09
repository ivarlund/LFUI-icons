import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Paper24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M5 3v18h14l-.005-12.414L13.414 3H5zm2 2h4v6h5.996L17 19H7V5zm6 .415L16.581 9H13V5.415z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Paper24;
