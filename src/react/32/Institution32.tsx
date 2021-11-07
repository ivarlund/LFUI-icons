import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Institution32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M7 21h2V11H7zM3 27h26v-2H3zM5 24h22v-2H5zM15.99 3.9L7.798 8.014H4v2h4.273l7.738-3.887 8.107 3.887H28v-2h-3.428zM11 21h2V11h-2zM15 21h2V11h-2zM19 21h2V11h-2zM23 21h2V11h-2z" />
      </g>
    </svg>
  );
}

export default Institution32;
