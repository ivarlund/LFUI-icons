import * as React from "react";

function NavigationUmbrella32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M17 6h-2c-4.57 0-8.865 3.854-9.809 8.236 1.329-1.007 3.017-1.509 4.878-1.509 2.311 0 4.47 1.062 5.938 2.796 1.492-1.7 3.788-2.796 5.993-2.796 1.879 0 3.511.473 4.789 1.434C25.803 9.824 21.506 6 17 6zm12 11.527h-2c-.957-1.995-2.76-2.8-5-2.8-1.886 0-3.968 1.146-5 2.8h-2c-1.032-1.654-2.867-2.8-4.93-2.8-2.064 0-4.042.778-5.07 2.8H3V16C3 10 8.562 4 15 4h2c6.375 0 12 6 12 12v1.527zM14.791 27.079c-.306.503-.751.885-1.783.885s-1.935-.891-1.935-2.037H9.14c0 2.164 1.676 3.946 3.869 3.946C14.942 29.873 17 28.48 17 26c0-2.48-2 0-2 0s.097.575-.209 1.079z" />
        <path d="M15 16v10h2V16zM17 5V2h-2v3z" />
      </g>
    </svg>
  );
}

export default NavigationUmbrella32;
