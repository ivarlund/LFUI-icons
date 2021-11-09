import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Check40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M34.49 8.8L16.481 26.768l-8.557-8.615L6.5 19.557l9.967 10.045 19.432-19.384z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Check40;
