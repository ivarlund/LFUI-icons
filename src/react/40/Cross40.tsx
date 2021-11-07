import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Cross40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M29.546 9l-9.54 9.541L10.465 9l-1.454 1.454 9.542 9.542L9 29.549l1.454 1.454 9.552-9.553 9.54 9.542L31 29.538l-9.541-9.542L31 10.454z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Cross40;
