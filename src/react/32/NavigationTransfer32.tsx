import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function NavigationTransfer32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M20 25v4.204L30.519 20 20 10.796V15H10v1.83L4.52 12 10 7.23V9h9V7h-7V2.796L1.481 12 12 21.204V17h10v-1.821L27.473 20 22 24.802V23h-9v2z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default NavigationTransfer32;
