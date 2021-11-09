import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Envelope40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <g fill="currentColor" fillRule="nonzero">
          <path d="M2 7h36v26H2V7zm2 2v22h32V9H4z" />
          <path d="M20 20.705L3.636 7.228 2.364 8.772 20 23.295 37.636 8.772l-1.272-1.544zM37.669 31.257l-10-9-1.338 1.486 10 9zM3.669 32.743l10-9-1.338-1.486-10 9z" />
        </g>
      </g>
    </svg>
  );
}

export default Envelope40;
