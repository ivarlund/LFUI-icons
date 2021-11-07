import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function RadioEnclosed24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12 5c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" />
        <path d="M12 13.44c-.81 0-1.44-.63-1.44-1.44 0-.81.63-1.44 1.44-1.44.81 0 1.44.63 1.44 1.44 0 .81-.63 1.44-1.44 1.44" />
      </g>
    </svg>
  );
}

export default RadioEnclosed24;
