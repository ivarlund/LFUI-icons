import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Investment32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M21.017 6v2h3.586l-7.586 7.586-4-4.001-8.707 8.708 1.414 1.414 7.293-7.293 4 4 9-9V13h2V6zM7 23l2-2v5H7z" />
        <path d="M11 19l2-2v9h-2zM15 19l2 2v5h-2zM19 19l2-2v9h-2zM23 15l2-2v13h-2z" />
      </g>
    </svg>
  );
}

export default Investment32;
