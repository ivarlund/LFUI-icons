import * as React from "react";

function Tractor70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M22 39c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm31.477 6.4a6.74 6.74 0 110 13.48 6.74 6.74 0 010-13.48zM22 41a8 8 0 100 16 8 8 0 000-16zm31.477 6.4a4.74 4.74 0 100 9.48 4.74 4.74 0 000-9.48zM22 45a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zM35.865 9l6.389 21.64h5.494V17.255c0-.092-.01-.194-.027-.297l-.034-.154a1.721 1.721 0 00-1.665-1.285v-2a3.721 3.721 0 013.6 2.781c.081.311.127.64.127.955l-.001 13.385h7.537l.1 11.799c.885.33 1.722.778 2.492 1.336l-1.175 1.62a8.456 8.456 0 00-4.985-1.615c-3.674 0-6.934 2.443-8.078 5.932l-.226.688h-2.676v-2h1.254c1.595-3.927 5.421-6.62 9.726-6.62.563 0 1.119.044 1.664.131l-.079-9.271H40.76L34.37 11l-8.593-.001V32h-2V10.999L14.6 11l-2.026 20.541 1.713 5.683a14.432 14.432 0 017.907-2.344c7.609 0 13.59 5.914 14.074 13.52h3.47v2H34.3v-1c0-6.995-5.291-12.52-12.106-12.52-6.904 0-12.5 5.596-12.5 12.5h-2c0-4.324 1.892-8.206 4.895-10.862l-2.044-6.779L12.788 9h23.077z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Tractor70;
