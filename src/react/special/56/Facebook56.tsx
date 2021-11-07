import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Facebook56({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={56} height={56} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="evenodd">
        <path d="M0 56h56V0H0v56zm2.887-2.887h50.226V2.887H2.887v50.226z" />
        <path d="M25.242 41.803V28.736h-4.397v-5.093h4.397v-3.756c0-4.358 2.662-6.73 6.55-6.73 1.862 0 3.463.137 3.93.2v4.554l-2.697.001c-2.115 0-2.524 1.005-2.524 2.48v3.251h5.043l-.657 5.093h-4.386v13.067h-5.259z" />
      </g>
    </svg>
  );
}

export default Facebook56;
