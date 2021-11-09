import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function ArrowsApart232({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.8 8.857v-5.19L1.493 13.483 11.8 21.977V17h10.4v-2.737l5.293 4.362-5.293 5.042v-2.524h-7.5v2h5.5v5.19l10.307-9.816L20.2 10.023V15H9.8v2.737l-5.293-4.362L9.8 8.333v2.524h7.5v-2z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default ArrowsApart232;
