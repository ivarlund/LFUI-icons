import * as React from "react";

function Gravestones40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h40v40H0z" />
        <path
          d="M27.655 1.92l.376.162C34.601 4.928 38 8.608 38 13.142V25h-7v13H11l-.001-8H2V17c0-4.469 3.267-8.103 9.582-10.914l.407-.18.407.18c5.264 2.343 8.75 5.415 9.467 8.208 5.075 2.342 8.085 5.242 8.906 8.706H36v-9.858c0-3.503-2.725-6.528-8.386-9.058-3.118 1.271-5.505 3.105-6.823 4.81L19.21 7.671c1.591-2.06 4.415-4.196 8.065-5.604l.381-.147zM21 16.097c-5.401 2.487-8 5.458-8 8.903v11h16V25c0-3.445-2.599-6.416-8-8.903zm-9.011-8C6.595 10.585 4 13.555 4 17v11h6.999L11 25c0-4.284 3.005-7.8 8.821-10.56-.708-1.904-3.51-4.348-7.832-6.342z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Gravestones40;
