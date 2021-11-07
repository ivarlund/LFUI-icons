import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Logout32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M23.655 12l2.961 3.013H16v2h10.617l-2.96 3.012 1.425 1.403 5.32-5.415-5.319-5.415z" />
        <path d="M14.887 25.425a9.32 9.32 0 01-6.641-2.752c-3.663-3.673-3.663-9.648 0-13.32A9.316 9.316 0 0114.887 6.6c2.512 0 4.87.977 6.641 2.752l1.416-1.412a11.303 11.303 0 00-8.057-3.34A11.303 11.303 0 006.83 7.94c-4.44 4.451-4.44 11.694 0 16.145a11.303 11.303 0 008.057 3.34c3.047 0 5.908-1.186 8.057-3.34l-1.416-1.412a9.32 9.32 0 01-6.641 2.752" />
      </g>
    </svg>
  );
}

export default Logout32;
