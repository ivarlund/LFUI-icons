import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Coins20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <path
          d="M9 17v2H1v-2h8zm10 0v2h-8v-2h8zM9 14v2H1v-2h8zm10 0v2h-8v-2h8zm-4-8a4 4 0 110 8 4 4 0 010-8zm-6 5v2H1v-2h8zm6-3a2 2 0 100 4 2 2 0 000-4zM9 8v2H1V8h8zm2-3v2H3V5h8zM9 2v2H1V2h8z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Coins20;
