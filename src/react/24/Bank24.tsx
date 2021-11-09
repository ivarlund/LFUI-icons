import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Bank24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M5 18h2v-8H5zM3 21h18v-2H3zM12 2.848L5.721 7H3v2h3.252L12 5.2 17.789 9H21V7.022h-2.693zM9 18h2v-8H9zM13 18h2v-8h-2zM17 18h2v-8h-2z" />
      </g>
    </svg>
  );
}

export default Bank24;
