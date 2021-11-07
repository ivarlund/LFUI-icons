import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function LoginDevice20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h20v20H0z" />
        <g transform="translate(4 2)" fill="currentColor">
          <path
            d="M2-1h8a3 3 0 013 3v12a3 3 0 01-3 3H2a3 3 0 01-3-3V2a3 3 0 013-3zm0 2a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H2z"
            fillRule="nonzero"
          />
          <circle cx={3.5} cy={8.5} r={1.5} />
          <circle cx={3.5} cy={12.5} r={1.5} />
          <circle cx={8.5} cy={8.5} r={1.5} />
          <circle cx={8.5} cy={12.5} r={1.5} />
          <path fillRule="nonzero" d="M2 5h8V3H2z" />
        </g>
      </g>
    </svg>
  );
}

export default LoginDevice20;
