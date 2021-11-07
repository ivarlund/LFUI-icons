import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Card70({
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
          d="M61.5 16a2.5 2.5 0 012.5 2.5v34a2.5 2.5 0 01-2.5 2.5h-53A2.5 2.5 0 016 52.5v-34A2.5 2.5 0 018.5 16h53zm.5 14H8v22.5a.5.5 0 00.5.5h53a.5.5 0 00.5-.5V30zM22 40v2H11v-2h11zm8-4v2H11v-2h19zm29-4v6h-6v-2h4v-4h2zm3-10H8v6h54v-6zm-.5-4h-53a.5.5 0 00-.5.5V20h54v-1.5a.5.5 0 00-.5-.5z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Card70;
