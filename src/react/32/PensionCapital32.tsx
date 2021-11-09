import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function PensionCapital32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M16.004 3l-5.192 9h10.385l-5.193-9zm-5.769 10l-4.038 7h19.615l-4.038-7H10.235zM5.62 21l-4.04 7.003L30.428 28 26.389 21H5.62zm1.154 2h18.459l1.732 3-21.922.003L6.774 23z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default PensionCapital32;
