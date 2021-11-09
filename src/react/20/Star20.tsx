import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Star20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={20}
      height={20}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path id="star-20_svg__a" d="M18 17.493V0H0v17.493z" />
      </defs>
      <g transform="translate(1 1.1)" fill="none" fillRule="evenodd">
        <mask id="star-20_svg__b" fill="#fff">
          <use xlinkHref="#star-20_svg__a" />
        </mask>
        <path
          d="M9 11.82c.21 0 .42.065.597.196l2.441 1.815-.95-2.955a.999.999 0 01.36-1.11l2.498-1.842-3.065.007h-.002a1 1 0 01-.953-.698L9 4.311l-.926 2.922a1.01 1.01 0 01-.955.698l-3.065-.007 2.5 1.841a.999.999 0 01.358 1.111l-.95 2.955 2.441-1.815c.178-.13.387-.197.597-.197m4.944 5.674a.998.998 0 01-.596-.197L9 14.066l-4.348 3.23a1 1 0 01-1.548-1.109l1.684-5.238-4.38-3.226A1.001 1.001 0 011 5.918h.002l5.388.012L8.047.698a1 1 0 011.906 0L11.61 5.93l5.388-.012H17a1 1 0 01.593 1.805l-4.38 3.226 1.683 5.238a.999.999 0 01-.952 1.306"
          fill="currentColor"
          mask="url(#star-20_svg__b)"
        />
      </g>
    </svg>
  );
}

export default Star20;
