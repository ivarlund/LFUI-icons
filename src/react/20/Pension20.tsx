import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Pension20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M10 5.275L4.321 16h11.356L9.999 5.275zM10 1l9 17H1l9-17z" />
        <path d="M7 10V8h6v2zM4.5 14v-2h11v2z" />
      </g>
    </svg>
  );
}

export default Pension20;
