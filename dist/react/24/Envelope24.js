import * as React from "react";

function Envelope24({ title, titleId, ...props }) {
  return (
    <svg width={24} height={24} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M3.75 18h16.5V6H3.75v12zM22 4v16H2V4h20z" />
        <path d="M12.038 11.675L4.37 5.058 3.015 6.53l9.028 7.867 8.94-7.867-1.358-1.468zM21.066 17.444l-4.3-4.57-1.442 1.386 4.3 4.57zM4.465 18.779l4.328-4.519-1.442-1.386-4.327 4.519z" />
      </g>
    </svg>
  );
}

export default Envelope24;
