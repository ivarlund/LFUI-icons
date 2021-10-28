import * as React from "react";

function MulticolorDogRight64({ title, titleId, ...props }) {
  return (
    <svg width={64} height={64} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        transform="matrix(-1 0 0 1 59 2)"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M25.316 53c-4.662-1.032-7.784-5.285-7.258-9.888.526-4.603 4.533-8.093 9.315-8.112A10.19 10.19 0 0133 36.773"
          stroke="#E30613"
        />
        <path
          d="M13 54H5.625c-.7-.012-1.373.298-1.867.86-.495.56-.768 1.325-.758 2.118V60h12M14 16.781a9.569 9.569 0 01-7.065.916c-2.387-.615-4.422-2.124-5.655-4.194A8.37 8.37 0 01.068 8"
          stroke="#005AA0"
        />
        <circle stroke="#005AA0" cx={0.5} cy={5.5} r={0.5} />
        <path
          d="M22.293 11.406v3.079c0 2.494 1.95 4.515 4.354 4.515S31 16.979 31 14.485v-2.052C30.538 6.858 26.83 2.147 21.658.559 16.485-1.028 10.903.833 7.59 5.25H3"
          stroke="#005AA0"
        />
        <path d="M11 22v30" stroke="#005AA0" fill="#000" />
        <path
          d="M54 39c-.017 6.068-4.932 10.983-11 11M20.677 54.55h-2.972c-.72-.01-1.415.271-1.924.78-.51.51-.791.95-.78 1.67v3h25.224c5.202-15.026-1.354-30.599-15.426-38"
          stroke="#005AA0"
        />
      </g>
    </svg>
  );
}

export default MulticolorDogRight64;
