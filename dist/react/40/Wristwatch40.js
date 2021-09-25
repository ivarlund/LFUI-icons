import * as React from "react";

function SvgWristwatch40(props) {
  return (
    <svg width={40} height={40} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M12.067 10.996L13.567 2h12.917l1.45 8.998A11.971 11.971 0 0132 20c0 3.582-1.57 6.797-4.057 8.996l-1.495 8.96H13.53l-1.44-8.93A11.972 11.972 0 018 20c0-3.586 1.573-6.805 4.067-9.004zm2.293-1.59A11.947 11.947 0 0120 8c2.044 0 3.969.511 5.654 1.413L24.78 4h-9.52l-.9 5.405zm.011 21.195l.864 5.355h9.519l.895-5.366C23.965 31.49 22.042 32 20 32c-2.034 0-3.95-.506-5.629-1.4zM20 30c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm5.724-7.1l-1.172 1.622L19 20.512V11.5h2v7.989l4.724 3.412z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgWristwatch40;
