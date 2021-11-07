import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function RadioEnclosed40({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M20 38c-9.941 0-18-8.059-18-18S10.059 2 20 2s18 8.059 18 18-8.059 18-18 18zm0-2c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16z"
          fillRule="nonzero"
        />
        <path d="M20.06 22c-1.09 0-2.06-.875-2.06-2s.848-2 2.06-2c1.213 0 1.94.875 1.94 2s-.848 2-1.94 2z" />
      </g>
    </svg>
  );
}

export default RadioEnclosed40;
