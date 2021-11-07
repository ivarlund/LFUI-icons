import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Guide24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M11 22.001h2V2h-2z" />
        <path d="M12 4v2.001h6.172l1 1-1 1H14V10h5l3-2.999L19 4zM5 7l-3 3 3 3h5v-1.999H5.829L4.828 10l1.001-1H12V7zM8 20h8v2H8z" />
      </g>
    </svg>
  );
}

export default Guide24;
