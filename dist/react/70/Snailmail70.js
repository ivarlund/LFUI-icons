import * as React from "react";

function Snailmail70({ title, titleId, ...props }) {
  return (
    <svg width={70} height={70} aria-labelledby={titleId} {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h70v70H0z" />
        <path
          d="M47 6v6h-6v15.639h-2V21H24.423C26.603 22.68 28 25.267 28 28.168v26.729h34V28.159c0-3.91-2.958-7.03-6.761-7.155L55 21H44v-2h11c5.034 0 9 4.076 9 9.16v28.738l-26-.001v7h-2v-7h-2v7h-2v-7H6v-2h20V53H13V31h13v-2.832c0-3.878-3.264-7.037-7.255-7.162l-.245-.004c-4.101 0-7.5 3.208-7.5 7.166v24.866H9V28.168c0-4.925 4.024-8.943 9.072-9.159l.001-.009H39V6h8zM25.818 43.29L15 34.152v15.431l5.293-5.291 1.414 1.414L16.414 51H26v-7.928l-.182.217zM26 33h-9.266L26 40.825V33zM45 8h-4v2h4V8z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default Snailmail70;
