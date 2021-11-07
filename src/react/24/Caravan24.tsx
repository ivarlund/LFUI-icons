import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Caravan24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M19.693 5l3.396 9.057L21.617 17H23v2l-9.171.001a3 3 0 01-5.658 0L3.382 19 .94 14.116 3.22 5h16.473zM11 17a1 1 0 100 2 1 1 0 000-2zm7.306-10H4.781L3.06 13.883 4.618 17h3.553a3.001 3.001 0 015.658 0h5.552l1.529-3.058L18.306 7zM10 8v6H8v-4H7v5H5V8h5zm6 0v3h-2v-1h-2V8h4z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Caravan24;
