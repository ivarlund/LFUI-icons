import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Check32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M24.49 9.8L13.481 20.768l-5.557-5.615L6.5 16.557l6.967 7.045 12.432-12.384z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Check32;
