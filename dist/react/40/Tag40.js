import * as React from "react";

function Tag40({ title, titleId, ...props }) {
  return (
    <svg width={40} height={40} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor" fillRule="nonzero">
        <path d="M22.514 5.015L5.46 22.07l12.488 12.488 17.054-17.055.005-7.39-5.097-5.096-7.396-.002zm14.493 4.271l-.005 9.046-19.054 19.054L2.63 22.07 21.686 3.015l9.053.002 6.268 6.27z" />
        <path d="M26 16c1.093 0 2-.907 2-2s-.907-2-2-2-2 .907-2 2c0 .431.018.574.088.714l.054.131c.042.124.144.285.295.44.41.478.916.715 1.563.715zm-4-2c0-2.197 1.803-4 4-4s4 1.803 4 4-1.803 4-4 4c-1.237 0-2.296-.496-3.03-1.357a3.118 3.118 0 01-.7-1.095C22.042 15.073 22 14.7 22 14z" />
      </g>
    </svg>
  );
}

export default Tag40;
