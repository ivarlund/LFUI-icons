import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Subsidiaries32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12 7v6h8V7h-8zm-2-2h12v10H10V5zM15 23v2h2v-2h-2zm-2-2h6v6h-6v-6zM24 23v2h2v-2h-2zm-2-2h6v6h-6v-6zM6 23v2h2v-2H6zm-2-2h6v6H4v-6z" />
        <path d="M8 19v3H6v-5h20v5h-2v-3z" />
        <path d="M15 13.5h2V22h-2z" />
      </g>
    </svg>
  );
}

export default Subsidiaries32;
