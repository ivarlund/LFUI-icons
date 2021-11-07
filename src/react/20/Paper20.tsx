import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Paper20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M3 1v18h14l-.005-12.414L11.414 1H3zm2 2h4v6h5.996L15 17H5V3zm6 .415L14.581 7H11V3.415z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Paper20;
