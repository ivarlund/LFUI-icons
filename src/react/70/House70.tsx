import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function House70({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M58 32.187L35 13.294 12 32.186V59h11v2H6v-2h4l-.001-25.171-2.364 1.944-1.27-1.546L35 10.706l28.635 23.521-1.27 1.546L60 33.829V59h4v2H33v-2h25V32.187zM51 40v19h-2V42h-8v17h-2V40h12zm-18 0v12H19V40h14zm-2 2H21v8h10v-8zm4-23.302l6.64 5.534-1.28 1.536L35 21.302l-5.36 4.466-1.28-1.536L35 18.698z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default House70;
