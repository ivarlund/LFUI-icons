import * as React from "react";

function SvgMulticolorSingle50(props) {
  return (
    <svg
      width={84}
      height={50}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <path id="multicolor-single-50_svg__a" d="M17 24v7h-7v-7z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h84v50H0z" />
        <path d="M21 10h40v40H21z" />
        <path
          d="M26 48V25M56 25v23M42 46V34h10v12"
          stroke="#005AA0"
          strokeWidth={2}
        />
        <path stroke="#0059A0" strokeWidth={2} d="M47 24l-6-5-6 5" />
        <path
          stroke="#005AA0"
          strokeWidth={2}
          d="M59 28L41 13 23 28M39 47h20M23 47h11"
        />
        <g transform="translate(21 10)">
          <use stroke="#979797" xlinkHref="#multicolor-single-50_svg__a" />
          <use
            stroke="#005AA0"
            strokeWidth={2}
            xlinkHref="#multicolor-single-50_svg__a"
          />
        </g>
        <path
          d="M61 3.795l.905-.822a3.77 3.77 0 015.069 0h0a3.108 3.108 0 010 4.603L61 13l-5.974-5.424a3.108 3.108 0 010-4.603h0a3.77 3.77 0 015.07 0l.904.822z"
          stroke="#E30613"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

export default SvgMulticolorSingle50;
