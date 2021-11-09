import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Accident20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M7 2v5H2v6h5v5h5.999v-5H18V7h-5.001V2H7zM3.999 9H9V4h2v5h5v2h-5v5H9v-5H3.999V9z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Accident20;
