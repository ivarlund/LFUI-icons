import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Bank32({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M2 27v-2h28v2zM4 24v-2h24v2zM27 21h-2V10h2zM22 21h-2V10h2zM17 21h-2V10h2zM12 21h-2V10h2zM7 21H5V10h2zM16 5.101L7.553 9H3V7h4.114L16 2.899 24.886 7H29v2h-4.553z" />
      </g>
    </svg>
  );
}

export default Bank32;
