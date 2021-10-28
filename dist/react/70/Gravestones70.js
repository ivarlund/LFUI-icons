import * as React from "react";

function Gravestones70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M47.595 5.918l.38.166C58.583 10.734 64 16.668 64 23.904V43H52.995c.003.121.005.242.005.364V64H21l-.001-13H6V30.364c0-7.02 5.268-12.775 15.581-17.28l.4-.175.401.175c8.747 3.821 14.446 8.818 15.457 13.194l-.44-.195c9.143 3.99 14.326 8.958 15.394 14.917H62V23.903c0-6.207-4.745-11.485-14.448-15.819-5.366 2.166-9.481 5.347-11.757 8.327l-1.59-1.214c2.55-3.338 7.104-6.826 13.004-9.129l.386-.15zM37 28.093c-9.405 4.188-14 9.284-14 15.27V62h28V43.364c0-5.987-4.595-11.083-14-15.271zm-15.018-13C12.589 19.281 8 24.377 8 30.363V49h12.999L21 43.364c0-6.841 5.008-12.48 14.817-16.932-.99-3.454-6.006-7.846-13.835-11.339z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Gravestones70;
