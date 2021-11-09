import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function NotificationEnvelope20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M3 15h14V5H3v10zM19 3v14H1V3h18z" />
        <path d="M10.038 9.375L3.678 4 2.322 5.472l7.72 6.625 7.636-6.627-1.358-1.468zM17.733 14.5l-3.5-4-1.466 1.36 3.5 4zM3.733 15.86l3.5-4-1.466-1.36-3.5 4z" />
      </g>
    </svg>
  );
}

export default NotificationEnvelope20;
