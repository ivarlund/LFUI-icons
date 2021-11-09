import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Menu24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M5 8h14V6H5zM5 13h14v-2H5zM5 18h14v-2H5z" />
      </g>
    </svg>
  );
}

export default Menu24;
