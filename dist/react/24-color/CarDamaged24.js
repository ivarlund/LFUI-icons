import * as React from "react";

function CarDamaged24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g transform="translate(0 2)" fill="none" fillRule="evenodd">
        <path
          d="M20 7l-2.5-4s-.438-1.003-5.5-1c-5.063.003-5.5 1-5.5 1L4 7l-1 4v5.5c0 .75.5 1 1 1s1-.406 1-1V15h14v1.5c0 .531.5 1 1 1s1-.438 1-1l.044-5.5L20 7zm3 9.5c0 1.666-1.392 3-3 3-1.439 0-2.707-1.095-2.956-2.499l-10.086.004A3.009 3.009 0 014 19.5c-1.632 0-3-1.14-3-3v-5.746l1.136-4.546 2.638-4.22c.346-.6 1-1.067 1.944-1.384C7.881.214 9.588 0 11.998 0c2.418-.001 4.13.212 5.294.605.939.318 1.59.785 1.935 1.384l2.631 4.21 1.19 4.559-.004.271L23 16.5z"
          fill="#005AA0"
          fillRule="nonzero"
        />
        <path fill="#005AA0" fillRule="nonzero" d="M2 14v-2h13v2z" />
        <path fill="#E30613" fillRule="nonzero" d="M16 14v-2h4v2z" />
        <path
          d="M1 8a1 1 0 110-2h1.5a1 1 0 110 2H1zM21.5 8a1 1 0 010-2H23a1 1 0 010 2h-1.5z"
          fill="#005AA0"
          fillRule="nonzero"
        />
        <path
          fill="#E30613"
          fillRule="nonzero"
          d="M11.586 5.014H6v2h6.414L14 5.428l1.586 1.586H18v-2h-1.586L14 2.6z"
        />
        <circle fill="#005AA0" cx={6.5} cy={9.5} r={1.5} />
        <circle fill="#005AA0" cx={17.5} cy={9.5} r={1.5} />
      </g>
    </svg>
  );
}

export default CarDamaged24;
