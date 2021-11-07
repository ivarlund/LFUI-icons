import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function Chat20({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg width={20} height={20} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M12.998 2h-6A6.505 6.505 0 00.5 8.498a6.505 6.505 0 006.498 6.498h.804l4.196 4.154V13h-2v1.356l-1.374-1.36H6.998A4.503 4.503 0 012.5 8.498 4.503 4.503 0 016.998 4h6a4.503 4.503 0 014.498 4.498 4.503 4.503 0 01-4.498 4.498v2a6.505 6.505 0 006.498-6.498A6.505 6.505 0 0012.998 2"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Chat20;
