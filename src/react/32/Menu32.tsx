import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Menu32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M7 11h18V8.999H7zM7 17h18v-2H7zM7 23h18v-2H7z" />
      </g>
    </svg>
  );
}

export default Menu32;
