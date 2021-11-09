import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function RadioEnclosed70({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width={70}
      height={70}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M35 6c16.016 0 29 12.984 29 29S51.016 64 35 64 6 51.016 6 35 18.984 6 35 6zm0 2C20.088 8 8 20.088 8 35s12.088 27 27 27 27-12.088 27-27S49.912 8 35 8zm0 22a5 5 0 110 10 5 5 0 010-10z"
          id="radio-enclosed-70_svg__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#radio-enclosed-70_svg__a"
        />
      </g>
    </svg>
  );
}

export default RadioEnclosed70;
