import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Text2Round32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" />
        <path d="M18.04 16.125c1.71-2.79.555-5.774-1.905-5.774-1.77 0-2.85 1.184-2.835 3.239h1.785c0-.869.33-1.319.96-1.319.585 0 .9.434.9 1.29 0 .614-.345 1.214-.645 1.724l-3.105 5.235V21h5.79v-1.95h-2.73l1.785-2.925z" />
      </g>
    </svg>
  );
}

export default Text2Round32;
