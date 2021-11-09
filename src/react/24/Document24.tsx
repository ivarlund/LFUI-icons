import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Document24({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={24}
      height={24}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M18 20V6.742L15.552 4H6v16h12zM16.448 2L20 5.979V22H4V2h12.448zM16 13H8v2h8v-2zm0-3H8v2h8v-2zm-2-3H8v2h6V7z"
          id="document-24_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#document-24_svg__a"
        />
      </g>
    </svg>
  );
}

export default Document24;
