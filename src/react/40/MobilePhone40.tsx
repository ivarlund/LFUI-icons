import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function MobilePhone40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <g transform="translate(10 3)" fill="currentColor">
          <path
            d="M2-1h16a3 3 0 013 3v30a3 3 0 01-3 3H2a3 3 0 01-3-3V2a3 3 0 013-3zm0 2a1 1 0 00-1 1v30a1 1 0 001 1h16a1 1 0 001-1V2a1 1 0 00-1-1H2z"
            fillRule="nonzero"
          />
          <circle cx={10} cy={30.5} r={1.5} />
          <path fillRule="nonzero" d="M0 28h19v-2H0zM0 5h19V3H0z" />
        </g>
      </g>
    </svg>
  );
}

export default MobilePhone40;
