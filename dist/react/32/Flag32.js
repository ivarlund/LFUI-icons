import * as React from "react";

function Flag32({ title, titleId, ...props }) {
  return (
    <svg width={32} height={32} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M23 17.613c-2.189.27-3.725-.325-5.468-1.005-1.958-.763-4.175-1.612-7.532-1.263V7.397c2.91-.596 4.78.184 6.758 1.014 1.808.76 3.678 1.543 6.242 1.276v7.926zm.789-10.074c-2.606.56-4.298-.15-6.257-.972-1.99-.836-4.247-1.758-7.532-1.193V4H8v24h2V17.351c2.986-.355 4.848.356 6.806 1.12 1.53.597 3.099 1.21 5.13 1.21.695 0 1.445-.073 2.266-.242l.798-.165V7.278l-1.211.261z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Flag32;
