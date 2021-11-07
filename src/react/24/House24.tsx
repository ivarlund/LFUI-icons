import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function House24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12.002 4.25L4 10.367V20h2v-8.645l6.002-4.588L18 11.355V20h2v-9.633z" />
        <path d="M9 13v7h2v-5h2v5h2v-7z" />
      </g>
    </svg>
  );
}

export default House24;
