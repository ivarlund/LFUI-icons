import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SpecialStar20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={14} height={13} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M7 10.362l-4.114 2.151.785-4.556L.343 4.73l4.6-.665L7-.08l2.057 4.145 4.6.665-3.328 3.227.785 4.556z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SpecialStar20;
