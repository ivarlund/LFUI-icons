import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Download24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M4 17v3h16v-3h2v5H2v-5h2zm9-15v12.238l4.3-4.299 1.414 1.415-6.707 6.707L5.3 11.354l1.414-1.415L11 14.224V2h2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Download24;
