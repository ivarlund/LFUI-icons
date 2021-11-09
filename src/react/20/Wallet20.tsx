import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Wallet20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M18 9h-1V6H4v2h11v1h-1v2h2v1h-2v2h1v1H3.89a.89.89 0 01-.89-.89V5.89A.89.89 0 013.89 5H16V3H3.89A2.893 2.893 0 001 5.89v8.22A2.893 2.893 0 003.89 17H17v-3h1V9z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Wallet20;
