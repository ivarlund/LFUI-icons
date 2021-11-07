import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function PensionMega32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16.002 4l-5.192 9h10.385l-5.193-9zm0 4.002L17.732 11h-3.46l1.73-2.998zM10.233 18l1.153-2h9.228l1.154 2H10.233zm11.538-4h-11.54L6.77 20h18.462l-3.461-6zM6.193 21L2.73 27.003h26.542L25.809 21H6.193zm1.154 2.001h17.305l1.157 2.002H6.192l1.155-2.002z" />
      </g>
    </svg>
  );
}

export default PensionMega32;
