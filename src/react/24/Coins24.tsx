import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Coins24({
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
          d="M11 20v2H2v-2h9zm11 0v2h-9v-2h9zm-11-3v2H2v-2h9zm11 0v2h-9v-2h9zm-4.5-9a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM11 14v2H2v-2h9zm6.5-4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM11 11v2H2v-2h9zm0-3v2H2V8h9zm2-3v2H4V5h9zm-2-3v2H2V2h9z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Coins24;
