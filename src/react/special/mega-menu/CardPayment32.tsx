import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function CardPayment32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M5 22V9c0-.448.552-1 1-1h20c.448 0 1 .552 1 1v13c0 .448-.552 1-1 1H6c-.448 0-1-.552-1-1zm21 3c1.552 0 3-1.448 3-3V9c0-1.552-1.448-3-3-3H6C4.448 6 3 7.448 3 9v13c0 1.552 1.448 3 3 3h20z" />
        <path d="M5 10v2h22v-2zM13 17v-2H7v2z" />
      </g>
    </svg>
  );
}

export default CardPayment32;
