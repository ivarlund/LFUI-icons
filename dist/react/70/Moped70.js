import * as React from "react";

function Moped70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M11.316 37.478l1.333 1.49a5.555 5.555 0 107.934 7.743l.161-.197 1.58 1.226a7.555 7.555 0 11-11.221-10.064l.213-.198zm42.11-1.924a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM42.566 17l9.018 15.03c.525-.087 1.06-.138 1.605-.151l.293-.004c1.496 0 2.951.293 4.302.853l.366.16-.832 1.819a9.195 9.195 0 00-3.836-.832c-5.089 0-9.33 3.959-9.478 8.861L44 43v4H23.605L7 31.433V23h24v1c0 4.906-3.316 9.127-7.803 10.516a9.314 9.314 0 008.902 6.575c5.007 0 8.765-3.767 8.897-8.814L41 32v-7h2v7c0 6.279-4.686 11.09-10.901 11.09-5.093 0-9.489-3.39-10.867-8.16-.312.035-.627.058-.946.066L20 35v-2c4.472 0 8.263-3.392 8.905-7.707l.037-.293H8.999v5.566L24.395 45h17.604L42 43c0-4.804 3.184-8.89 7.563-10.45L41.434 19H37v-2h5.566zm10.916 22.318a3.792 3.792 0 11-3.787 3.987l-.005-.195h2a1.792 1.792 0 101.94-1.786l-.148-.006v-2zm-38.93 3.792a1.792 1.792 0 002.746 1.517l.137-.096 1.22 1.586a3.792 3.792 0 01-6.098-2.812l-.005-.195h2zM19 28v2h-8v-2h8zm30.868-5.497l2.849 4.97-1.735.995-2.85-4.97 1.736-.995z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Moped70;
