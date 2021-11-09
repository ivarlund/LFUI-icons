import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ShortcutDocuments50({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={50} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g strokeWidth={2} fill="none" fillRule="evenodd">
        <path stroke="#005AA0" d="M35 18v12h4l-7 8-7-8h4v-3" />
        <path stroke="#005AA0" d="M27 37H10V3h15l10 10v5" />
        <path d="M15 12h7m-7 4h14" stroke="#E30613" />
        <path d="M15 20h14m-14 4.044h14M35 13H25V3" stroke="#005AA0" />
      </g>
    </svg>
  );
}

export default ShortcutDocuments50;
