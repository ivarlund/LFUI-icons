import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Plus32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M15 8v7H8v2h7v7h2v-7h7v-2h-7V8z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Plus32;
